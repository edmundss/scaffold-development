import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/user-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
 * @route '/user-settings'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
 * @route '/user-settings'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/user-settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
 * @route '/user-settings'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
 * @route '/user-settings'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
 * @route '/user-settings'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
 * @route '/user-settings'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const UserSettingsController = { index, update }

export default UserSettingsController