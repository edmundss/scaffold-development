import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
export const regular = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: regular.url(options),
    method: 'get',
})

regular.definition = {
    methods: ["get","head"],
    url: '/demo/tables/regular',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
regular.url = (options?: RouteQueryOptions) => {
    return regular.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
regular.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: regular.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
regular.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: regular.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
    const regularForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: regular.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
        regularForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: regular.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
        regularForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: regular.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    regular.form = regularForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
export const extended = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extended.url(options),
    method: 'get',
})

extended.definition = {
    methods: ["get","head"],
    url: '/demo/tables/extended',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
extended.url = (options?: RouteQueryOptions) => {
    return extended.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
extended.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extended.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
extended.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: extended.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
    const extendedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: extended.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
        extendedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extended.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
        extendedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extended.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    extended.form = extendedForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
export const datatables = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: datatables.url(options),
    method: 'get',
})

datatables.definition = {
    methods: ["get","head"],
    url: '/demo/tables/datatables',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
datatables.url = (options?: RouteQueryOptions) => {
    return datatables.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
datatables.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: datatables.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
datatables.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: datatables.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
    const datatablesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: datatables.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
        datatablesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: datatables.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
        datatablesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: datatables.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    datatables.form = datatablesForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
export const datatablesData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: datatablesData.url(options),
    method: 'get',
})

datatablesData.definition = {
    methods: ["get","head"],
    url: '/demo/tables/datatables/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
datatablesData.url = (options?: RouteQueryOptions) => {
    return datatablesData.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
datatablesData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: datatablesData.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
datatablesData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: datatablesData.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
    const datatablesDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: datatablesData.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
        datatablesDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: datatablesData.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
 * @route '/demo/tables/datatables/data'
 */
        datatablesDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: datatablesData.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    datatablesData.form = datatablesDataForm
const tables = {
    regular: Object.assign(regular, regular),
extended: Object.assign(extended, extended),
datatables: Object.assign(datatables, datatables),
datatablesData: Object.assign(datatablesData, datatablesData),
}

export default tables