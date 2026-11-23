import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/security',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
 * @route '/settings/security'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
 * @route '/settings/password'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
 * @route '/settings/password'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
 * @route '/settings/password'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
 * @route '/settings/password'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
 * @route '/settings/password'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const SecurityController = { edit, update }

export default SecurityController