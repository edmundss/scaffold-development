import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
const DemoDatatableController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DemoDatatableController.url(options),
    method: 'get',
})

DemoDatatableController.definition = {
    methods: ["get","head"],
    url: '/demo/tables/datatables/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
DemoDatatableController.url = (options?: RouteQueryOptions) => {
    return DemoDatatableController.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
DemoDatatableController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DemoDatatableController.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
DemoDatatableController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DemoDatatableController.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
    const DemoDatatableControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: DemoDatatableController.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
        DemoDatatableControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: DemoDatatableController.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
        DemoDatatableControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: DemoDatatableController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    DemoDatatableController.form = DemoDatatableControllerForm
export default DemoDatatableController