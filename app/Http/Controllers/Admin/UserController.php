<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Services\ActiveDirectoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Response;
use Spatie\Permission\Models\Role;
use Yajra\DataTables\Facades\DataTables;

class UserController extends Controller
{
    public function index(): Response
    {
        return inertia('admin/user/Index');
    }

    public function create(): Response
    {
        return inertia('admin/user/Create');
    }

    public function store(StoreUserRequest $request): RedirectResponse
    {
        $user = User::create($request->validated());

        return redirect()->route('admin.users.show', $user);
    }

    public function show(User $user): Response
    {
        $roles = Role::all();
        $userRoles = [];
        foreach ($roles as $role) {
            $userRoles[$role->name] = $user?->hasRole($role->name);
        }

        return inertia('admin/user/Show', [
            'user' => $user,
            'userRoles' => $userRoles,
            // 'isEvaluator' => $user->is_evaluator,
        ]);
    }

    public function update(User $user, UpdateUserRequest $request)
    {
        $adService = new ActiveDirectoryService;
        $userData = $adService->getUserAttributes($request->username);

        if (! $userData) {
            return response()->json(['message' => 'Lietotājs nav atrasts'], 404);
        }

        $user->update($userData);

        return response()->json(['message' => 'Lietotājs atjaunots'], 200);

    }

    public function avatar(User $user): \Illuminate\Http\Response
    {
        $url = $user->avatar;
        $urlArray = explode('/', $url);
        $filename = end($urlArray);
        $name = explode('.', $filename)[0];

        // encode name for url
        $name = urlencode($name);

        // reconstruct url from url array and name + extension
        $url = implode('/', array_slice($urlArray, 0, -1)).'/'.$name.'.png';

        // load image from link provided in user.avatar
        $image = file_get_contents($url);

        // return image
        return response($image, 200)->header('Content-Type', 'image/jpeg');
    }

    public function datatable(): JsonResponse
    {
        $users = DB::table('users')
            ->whereNull('users.deleted_at')
            ->leftJoin('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->leftJoin('roles', 'model_has_roles.role_id', '=', 'roles.id')
            ->groupBy(['users.id', 'users.name', 'users.email'])
            ->select([
                'users.name',
                'users.id',
                'users.email',
                DB::raw("STRING_AGG(roles.name, ', ') AS roles"), // postgres
                // DB::raw("GROUP_CONCAT(roles.name SEPARATOR ', ')  AS roles"), // mysql
            ]);

        return DataTables::of($users)->make(true);
    }

    public function toggleRole(User $user)
    {
        if (request()->add == 'true') {
            $user->assignRole(request()->role);

            return response()->json(['message' => 'Loma sekmīgi pievienota'], 200);
        } else {
            $user->removeRole(request()->role);

            return response()->json(['message' => 'Loma sekmīgi noņemta'], 200);
        }
    }

    public function select42()
    {
        return User::select('users.id AS value', 'users.name AS text')
            ->leftJoin('titles', 'users.title_id', '=', 'titles.id')
            ->where('users.name', 'ILIKE', '%'.request()->q.'%')
            ->where('titles.is_active', true)
            ->orderBy('users.name')
            ->take(10)
            ->get();
    }
}
