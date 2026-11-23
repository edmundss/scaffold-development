<?php

namespace Tests\Feature\Settings;

use App\Actions\User\DeleteAccount;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class AccountDeletionTest extends TestCase
{
    use RefreshDatabase;

    public function test_self_deletion_anonymizes_author_and_removes_credentials(): void
    {
        Storage::fake('local');
        $user = User::factory()->withTwoFactor()->create();
        Storage::disk('local')->put('avatars/test.webp', 'image');
        $user->forceFill(['avatar_disk' => 'local', 'avatar_path' => 'avatars/test.webp'])->save();
        $comment = Comment::create(['user_id' => $user->id, 'commentable_type' => $user->getMorphClass(), 'commentable_id' => $user->id, 'comment' => 'Keep this record']);
        $user->passkeys()->create(['name' => 'Device', 'credential_id' => 'credential', 'credential' => []]);
        DB::table('password_reset_tokens')->insert(['email' => $user->email, 'token' => 'reset-token']);
        DB::table('sessions')->insert(['id' => 'other-device', 'user_id' => $user->id, 'payload' => '', 'last_activity' => time()]);
        config(['session.driver' => 'database']);

        $this->actingAs($user)->delete(route('profile.destroy'), ['password' => 'password'])
            ->assertSessionHasNoErrors()->assertRedirect(route('home'));

        $deleted = User::withTrashed()->findOrFail($user->id);
        $this->assertSoftDeleted($deleted);
        $this->assertSame('Dzēsts lietotājs', $deleted->name);
        $this->assertNotSame($user->email, $deleted->email);
        $this->assertFalse(Hash::check('password', $deleted->password));
        $this->assertNull($deleted->two_factor_secret);
        $this->assertNull($deleted->remember_token);
        $this->assertNull($deleted->avatar_path);
        Storage::disk('local')->assertMissing('avatars/test.webp');
        $this->assertDatabaseCount('passkeys', 0);
        $this->assertDatabaseCount('password_reset_tokens', 0);
        $this->assertDatabaseMissing('sessions', ['id' => 'other-device']);
        $this->assertSame('Dzēsts lietotājs', $comment->fresh()->user->name);
        $this->assertSame('Keep this record', $comment->fresh()->comment);
        $this->assertGuest();
    }

    public function test_last_administrator_cannot_delete_their_account(): void
    {
        $role = Role::create(['name' => 'Sistēmas administrators', 'guard_name' => 'web']);
        $user = User::factory()->create();
        $user->assignRole($role);

        $this->actingAs($user)->delete(route('profile.destroy'), ['password' => 'password'])->assertSessionHasErrors('account');

        $this->assertNotSoftDeleted($user);
        $this->assertAuthenticatedAs($user);
    }

    public function test_admin_can_delete_another_user_after_confirmation(): void
    {
        $role = Role::create(['name' => 'Sistēmas administrators', 'guard_name' => 'web']);
        $admin = User::factory()->create();
        $admin->assignRole($role);
        $user = User::factory()->create();

        $this->actingAs($admin)->withSession(['auth.password_confirmed_at' => time()])
            ->delete(route('admin.users.destroy', $user), ['confirmation' => true])->assertRedirect(route('admin.users.index'));

        $this->assertSoftDeleted($user);
        $this->assertAuthenticatedAs($admin);
    }

    public function test_non_admin_cannot_delete_another_user(): void
    {
        $actor = User::factory()->create();
        $user = User::factory()->create();

        $this->actingAs($actor)->withSession(['auth.password_confirmed_at' => time()])
            ->delete(route('admin.users.destroy', $user), ['confirmation' => true])->assertForbidden();

        $this->assertNotSoftDeleted($user);
    }

    public function test_admin_deletion_requires_recent_confirmation(): void
    {
        $role = Role::create(['name' => 'Sistēmas administrators', 'guard_name' => 'web']);
        $admin = User::factory()->create();
        $admin->assignRole($role);
        $user = User::factory()->create();

        $this->actingAs($admin)->delete(route('admin.users.destroy', $user), ['confirmation' => true])->assertRedirect(route('password.confirm'));

        $this->assertNotSoftDeleted($user);
    }

    public function test_admin_must_explicitly_confirm_deletion(): void
    {
        $role = Role::create(['name' => 'Sistēmas administrators', 'guard_name' => 'web']);
        $admin = User::factory()->create();
        $admin->assignRole($role);
        $user = User::factory()->create();

        $this->actingAs($admin)->withSession(['auth.password_confirmed_at' => time()])
            ->delete(route('admin.users.destroy', $user))->assertSessionHasErrors('confirmation');

        $this->assertNotSoftDeleted($user);
    }

    public function test_an_administrator_can_be_deleted_when_another_remains(): void
    {
        $role = Role::create(['name' => 'Sistēmas administrators', 'guard_name' => 'web']);
        $actor = User::factory()->create();
        $actor->assignRole($role);
        $user = User::factory()->create();
        $user->assignRole($role);

        app(DeleteAccount::class)->handle($actor, $user);

        $this->assertSoftDeleted($user);
        $this->assertDatabaseMissing('model_has_roles', ['model_id' => $user->id, 'model_type' => $user->getMorphClass()]);
        $this->assertNotSoftDeleted($actor);
    }

    public function test_deleted_account_cannot_sign_in(): void
    {
        $user = User::factory()->create();
        $email = $user->email;
        app(DeleteAccount::class)->handle($user, $user);

        $this->post(route('login.store'), ['email' => $email, 'password' => 'password'])->assertSessionHasErrors('email');

        $this->assertGuest();
    }
}
