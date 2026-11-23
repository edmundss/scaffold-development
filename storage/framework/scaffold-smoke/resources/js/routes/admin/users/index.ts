import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
export const destroy = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
destroy.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { user: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.id
                : args.user,
                }

    return destroy.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
destroy.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
    const destroyForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
        destroyForm.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const users = {
    destroy: Object.assign(destroy, destroy),
}

export default users