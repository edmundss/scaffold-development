import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
 * @route '/settings/sessions'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/sessions',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
 * @route '/settings/sessions'
 */
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
 * @route '/settings/sessions'
 */
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
 * @route '/settings/sessions'
 */
    const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
 * @route '/settings/sessions'
 */
        destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const sessions = {
    destroy: Object.assign(destroy, destroy),
}

export default sessions