import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
export const regular = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: regular.url(options),
    method: 'get',
})

regular.definition = {
    methods: ["get","head"],
    url: '/demo/forms/regular',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
regular.url = (options?: RouteQueryOptions) => {
    return regular.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
regular.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: regular.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
regular.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: regular.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
    const regularForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: regular.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
        regularForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: regular.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
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
 * @route '/demo/forms/extended'
 */
export const extended = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extended.url(options),
    method: 'get',
})

extended.definition = {
    methods: ["get","head"],
    url: '/demo/forms/extended',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
extended.url = (options?: RouteQueryOptions) => {
    return extended.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
extended.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extended.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
extended.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: extended.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
    const extendedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: extended.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
        extendedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extended.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
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
 * @route '/demo/forms/validation'
 */
export const validation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: validation.url(options),
    method: 'get',
})

validation.definition = {
    methods: ["get","head"],
    url: '/demo/forms/validation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
validation.url = (options?: RouteQueryOptions) => {
    return validation.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
validation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: validation.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
validation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: validation.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
    const validationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: validation.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
        validationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: validation.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
        validationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: validation.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    validation.form = validationForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
export const wizard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wizard.url(options),
    method: 'get',
})

wizard.definition = {
    methods: ["get","head"],
    url: '/demo/forms/wizard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
wizard.url = (options?: RouteQueryOptions) => {
    return wizard.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
wizard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wizard.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
wizard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wizard.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
    const wizardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: wizard.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
        wizardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: wizard.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
        wizardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: wizard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    wizard.form = wizardForm
/**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
export const extendedCities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extendedCities.url(options),
    method: 'get',
})

extendedCities.definition = {
    methods: ["get","head"],
    url: '/demo/forms/extended/cities',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
extendedCities.url = (options?: RouteQueryOptions) => {
    return extendedCities.definition.url + queryParams(options)
}

/**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
extendedCities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extendedCities.url(options),
    method: 'get',
})
/**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
extendedCities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: extendedCities.url(options),
    method: 'head',
})

    /**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
    const extendedCitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: extendedCities.url(options),
        method: 'get',
    })

            /**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
        extendedCitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extendedCities.url(options),
            method: 'get',
        })
            /**
 * @see vendor/sulzanoks/scaffold/routes/web.php:45
 * @route '/demo/forms/extended/cities'
 */
        extendedCitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extendedCities.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    extendedCities.form = extendedCitiesForm
const forms = {
    regular: Object.assign(regular, regular),
extended: Object.assign(extended, extended),
validation: Object.assign(validation, validation),
wizard: Object.assign(wizard, wizard),
extendedCities: Object.assign(extendedCities, extendedCities),
}

export default forms