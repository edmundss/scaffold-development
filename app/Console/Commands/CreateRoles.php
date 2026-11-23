<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateRoles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-roles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Uzģenerē lietotāju lomas';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $permissions = [
            [
                'name' => 'Lietotāju pārvaldība',
                'description' => 'Pārvalda lietotājus.'
            ],
            [
                'name' => 'Lomu pārvaldība',
                'description' => 'Pārvalda lietotāju lomas.'
            ]
        ];

        $roles = [
            [
                'name' => 'Sistēmas administrators',
                'description' => 'Pārvalda lietotāju lomas, var pārslēgties uz jebkura lietotāja kontu.',
                'permissions' => ['Lietotāju pārvaldība', 'Lomu pārvaldība']
            ]
        ];

        foreach ($permissions as $permission) {
            if (!Permission::where('name', $permission['name'])->first()) {
                Permission::create($permission);
            }
        }

        foreach ($roles as $role) {
            if (!Role::where('name', $role['name'])->first()) {
                $newRole = Role::create([
                    'name' => $role['name'],
                    'description' => $role['description']
                ]);

                if (isset($role['permissions'])) {
                    $newRole->syncPermissions($role['permissions']);
                }
            }
        }

        echo "Lietotāju lomas ir izveidotas!\n";

        return 0;
    }
}
