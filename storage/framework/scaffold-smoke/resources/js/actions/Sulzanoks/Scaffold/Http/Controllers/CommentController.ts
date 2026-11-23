import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
export const get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get.url(options),
    method: 'get',
})

get.definition = {
    methods: ["get","head"],
    url: '/demo/pages/user-profile/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
get.url = (options?: RouteQueryOptions) => {
    return get.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
get.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
get.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: get.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
    const getForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: get.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
        getForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::get
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
        getForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    get.form = getForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
 * @route '/demo/pages/user-profile/comments'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/demo/pages/user-profile/comments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
 * @route '/demo/pages/user-profile/comments'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
 * @route '/demo/pages/user-profile/comments'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
 * @route '/demo/pages/user-profile/comments'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
 * @route '/demo/pages/user-profile/comments'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const CommentController = { get, store }

export default CommentController