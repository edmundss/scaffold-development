import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/demo/pages/user-profile/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
 * @route '/demo/pages/user-profile/comments'
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
const comments = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
}

export default comments