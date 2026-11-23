import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
const DeleteUserController = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DeleteUserController.url(args, options),
    method: 'delete',
})

DeleteUserController.definition = {
    methods: ["delete"],
    url: '/admin/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
DeleteUserController.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return DeleteUserController.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
DeleteUserController.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DeleteUserController.url(args, options),
    method: 'delete',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
 * @route '/admin/users/{user}'
 */
    const DeleteUserControllerForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: DeleteUserController.url(args, {
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
        DeleteUserControllerForm.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: DeleteUserController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    DeleteUserController.form = DeleteUserControllerForm
export default DeleteUserController