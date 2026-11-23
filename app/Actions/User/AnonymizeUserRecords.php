<?php

namespace App\Actions\User;

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\DB;
use Sulzanoks\Scaffold\Contracts\AnonymizesUserRecords;

class AnonymizeUserRecords implements AnonymizesUserRecords
{
    public function handle(User $user): void
    {
        DB::table('change_logs')->where('user_id', (string) $user->getKey())->update(['user_name' => 'Dzēsts lietotājs']);
        DB::table('change_logs')->where('changeable_type', $user->getMorphClass())
            ->where('changeable_id', $user->getKey())->whereIn('field_name', ['name', 'email', 'avatar', 'avatar_path'])
            ->update(['old_value' => '[anonimizēts]', 'new_value' => '[anonimizēts]']);
    }
}
