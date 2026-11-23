<?php

use App\Actions\User\AnonymizeUserRecords;
use App\Models\Comment;
use App\Models\UserSettings;
use App\Policies\UserPolicy;

return [
    'administrator_role' => 'Sistēmas administrators',
    'admin_users_route' => 'admin.users.index',
    'root_view' => 'app',
    'settings_model' => UserSettings::class,
    'comment_model' => Comment::class,
    'user_policy' => UserPolicy::class,
    'anonymize_user_records' => AnonymizeUserRecords::class,
];
