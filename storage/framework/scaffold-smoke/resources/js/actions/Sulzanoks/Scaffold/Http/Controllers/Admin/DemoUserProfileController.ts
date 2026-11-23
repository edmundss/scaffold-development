import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
const DemoUserProfileController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DemoUserProfileController.url(options),
    method: 'get',
})

DemoUserProfileController.definition = {
    methods: ["get","head"],
    url: '/demo/pages/user-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
DemoUserProfileController.url = (options?: RouteQueryOptions) => {
    return DemoUserProfileController.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
DemoUserProfileController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DemoUserProfileController.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
DemoUserProfileController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DemoUserProfileController.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
    const DemoUserProfileControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: DemoUserProfileController.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
        DemoUserProfileControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: DemoUserProfileController.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
        DemoUserProfileControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: DemoUserProfileController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    DemoUserProfileController.form = DemoUserProfileControllerForm
export default DemoUserProfileController