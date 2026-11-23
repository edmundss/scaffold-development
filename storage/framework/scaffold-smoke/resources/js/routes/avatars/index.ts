import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
export const show = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/users/{user}/avatar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
show.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
show.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
show.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
    const showForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
        showForm.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
 * @route '/users/{user}/avatar'
 */
        showForm.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
 * @route '/settings/avatar'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/settings/avatar',
} satisfies RouteDefinition<["post"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
 * @route '/settings/avatar'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
 * @route '/settings/avatar'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
 * @route '/settings/avatar'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
 * @route '/settings/avatar'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
 * @route '/settings/avatar'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/avatar',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
 * @route '/settings/avatar'
 */
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
 * @route '/settings/avatar'
 */
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
 * @route '/settings/avatar'
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
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
 * @route '/settings/avatar'
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
const avatars = {
    show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default avatars