import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::index
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
 * @route '/dashboard'
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
const DashboardController = { index }

export default DashboardController