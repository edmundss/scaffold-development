<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRoleRequest;
use App\Models\ActivityLog;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::orderBy('name')->get();
        return inertia('admin/roles/Index', [
            'roles' => $roles,
        ]);
    }

    public function store(StoreRoleRequest $request)
    {
        $role = Role::create($request->validated());

        return to_route('admin.roles.show', $role)->withSuccess('Loma izveidota.');
    }

    public function show(Role $role)
    {
        $permissions = Permission::all();
        $rolePermissions = [];

        foreach ($permissions as $permission) {
            $rolePermissions[] = [
                'name' => $permission->name,
                'hasPermission' => $role->hasPermissionTo($permission->name)
            ];
        }

        return inertia('admin/roles/Show', [
            'role' => $role,
            'permissions' => $rolePermissions,
            'users' => $role->users()->orderBy('name')->get(),
        ]);
    }

    public function togglePermission(Request $request, Role $role)
    {
        if ($request->state) {
            $role->givePermissionTo($request->permission);
        } else {
            $role->revokePermissionTo($request->permission);
        }
        return response(200);
    }
}
