<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PasskeyManagementTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_options_provide_a_challenge_without_authenticating(): void
    {
        $this->getJson(route('passkey.login-options'))->assertOk()->assertJsonStructure(['options' => ['challenge']]);
        $this->assertGuest();
    }

    public function test_invalid_passkey_does_not_authenticate(): void
    {
        $this->postJson(route('passkey.login'), ['credential' => ['id' => 'invalid']])->assertUnprocessable();
        $this->assertGuest();
    }

    public function test_registration_options_require_authentication(): void
    {
        $this->get(route('passkey.registration-options'))->assertRedirect(route('login'));
    }

    public function test_registration_options_require_recent_confirmation(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->getJson(route('passkey.registration-options'))->assertStatus(423);
    }

    public function test_confirmed_user_can_request_registration_options(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()])
            ->getJson(route('passkey.registration-options'))->assertOk()->assertJsonStructure(['options' => ['challenge', 'rp', 'user']]);
    }

    public function test_user_can_remove_their_own_passkey(): void
    {
        $user = User::factory()->create();
        $passkey = $user->passkeys()->create(['name' => 'My device', 'credential_id' => 'test-credential', 'credential' => []]);

        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()])
            ->deleteJson(route('passkey.destroy', $passkey))->assertOk();

        $this->assertDatabaseMissing('passkeys', ['id' => $passkey->id]);
    }

    public function test_user_cannot_remove_another_users_passkey(): void
    {
        $owner = User::factory()->create();
        $other = User::factory()->create();
        $passkey = $owner->passkeys()->create(['name' => 'Owner device', 'credential_id' => 'test-credential', 'credential' => []]);

        $this->actingAs($other)->withSession(['auth.password_confirmed_at' => time()])
            ->deleteJson(route('passkey.destroy', $passkey))->assertForbidden();

        $this->assertDatabaseHas('passkeys', ['id' => $passkey->id]);
    }

    public function test_invalid_registration_does_not_store_a_passkey(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()])
            ->postJson(route('passkey.store'), ['name' => 'Device', 'credential' => ['id' => 'invalid']])
            ->assertUnprocessable()->assertJsonValidationErrors(['credential.rawId', 'credential.type', 'credential.response']);

        $this->assertDatabaseCount('passkeys', 0);
    }
}
