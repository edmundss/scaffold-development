<?php

namespace Tests\Feature\Settings;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class SessionManagementTest extends TestCase
{
    use RefreshDatabase;

    public function test_security_page_only_exposes_own_active_sessions_without_payloads(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $other = User::factory()->create();
        $this->sessionFor($user, 'own-device');
        $this->sessionFor($other, 'foreign-device');
        DB::table('sessions')->where('id', 'own-device')->update(['payload' => 'private-session-data']);

        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()])
            ->get(route('security.edit'))
            ->assertOk()->assertDontSee('foreign-device')->assertDontSee('private-session-data')->assertSee('own-device');
    }

    public function test_unsupported_session_driver_does_not_partially_update_password(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->put(route('user-password.update'), [
            'current_password' => 'password', 'password' => 'new-password', 'password_confirmation' => 'new-password', 'revoke_other_sessions' => true,
        ])->assertSessionHasErrors('sessions');

        $this->assertTrue(Hash::check('password', $user->refresh()->password));
    }

    private function sessionFor(User $user, string $id): void
    {
        DB::table('sessions')->insert(['id' => $id, 'user_id' => $user->id, 'payload' => '', 'last_activity' => time()]);
    }

    public function test_revocation_requires_recent_confirmation(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $this->sessionFor($user, 'other-device');

        $this->actingAs($user)->delete(route('sessions.destroy'), ['session_id' => 'other-device'])
            ->assertRedirect(route('password.confirm'));

        $this->assertDatabaseHas('sessions', ['id' => 'other-device']);
    }

    public function test_revoking_one_session_cannot_revoke_another_users_session(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $other = User::factory()->create();
        $this->sessionFor($user, 'own-device');
        $this->sessionFor($other, 'foreign-device');

        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()])
            ->delete(route('sessions.destroy'), ['session_id' => 'foreign-device'])->assertSessionHasNoErrors();

        $this->assertDatabaseHas('sessions', ['id' => 'foreign-device']);
        $this->assertDatabaseHas('sessions', ['id' => 'own-device']);
    }

    public function test_revokes_selected_session_and_preserves_current_session(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $this->sessionFor($user, 'other-device');
        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()]);
        $currentId = session()->getId();
        $this->withCookie(config('session.cookie'), $currentId);

        $this->delete(route('sessions.destroy'), ['session_id' => 'other-device'])->assertSessionHasNoErrors();

        $this->assertDatabaseMissing('sessions', ['id' => 'other-device']);
        $this->assertDatabaseHas('sessions', ['id' => $currentId, 'user_id' => $user->id]);
        $this->assertAuthenticatedAs($user);
    }

    public function test_password_change_preserves_other_sessions_unless_requested(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $this->sessionFor($user, 'other-device');

        $this->actingAs($user)->put(route('user-password.update'), [
            'current_password' => 'password', 'password' => 'new-password', 'password_confirmation' => 'new-password',
        ])->assertSessionHasNoErrors();

        $this->assertDatabaseHas('sessions', ['id' => 'other-device']);
        $this->assertTrue(Hash::check('new-password', $user->refresh()->password));
    }

    public function test_password_change_can_revoke_all_other_sessions(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $other = User::factory()->create();
        $this->sessionFor($user, 'other-device');
        $this->sessionFor($other, 'foreign-device');

        $this->actingAs($user)->put(route('user-password.update'), [
            'current_password' => 'password', 'password' => 'new-password', 'password_confirmation' => 'new-password', 'revoke_other_sessions' => true,
        ])->assertSessionHasNoErrors();

        $this->assertDatabaseMissing('sessions', ['id' => 'other-device']);
        $this->assertDatabaseHas('sessions', ['id' => 'foreign-device']);
        $this->assertAuthenticatedAs($user);
    }

    public function test_all_other_sessions_are_revoked_without_revoking_current_session(): void
    {
        config(['session.driver' => 'database']);
        $user = User::factory()->create();
        $this->sessionFor($user, 'other-device-one');
        $this->sessionFor($user, 'other-device-two');
        $this->actingAs($user)->withSession(['auth.password_confirmed_at' => time()]);
        $currentId = session()->getId();
        $this->withCookie(config('session.cookie'), $currentId);

        $this->delete(route('sessions.destroy'))->assertSessionHasNoErrors();

        $this->assertDatabaseMissing('sessions', ['id' => 'other-device-one']);
        $this->assertDatabaseMissing('sessions', ['id' => 'other-device-two']);
        $this->assertDatabaseHas('sessions', ['id' => $currentId]);
    }
}
