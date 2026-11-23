import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
const Controller7f2a3021ac29e5cc71e01e4caa601195 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7f2a3021ac29e5cc71e01e4caa601195.url(options),
    method: 'get',
})

Controller7f2a3021ac29e5cc71e01e4caa601195.definition = {
    methods: ["get","head"],
    url: '/timeline',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
Controller7f2a3021ac29e5cc71e01e4caa601195.url = (options?: RouteQueryOptions) => {
    return Controller7f2a3021ac29e5cc71e01e4caa601195.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
Controller7f2a3021ac29e5cc71e01e4caa601195.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7f2a3021ac29e5cc71e01e4caa601195.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
Controller7f2a3021ac29e5cc71e01e4caa601195.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller7f2a3021ac29e5cc71e01e4caa601195.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
    const Controller7f2a3021ac29e5cc71e01e4caa601195Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller7f2a3021ac29e5cc71e01e4caa601195.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
        Controller7f2a3021ac29e5cc71e01e4caa601195Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller7f2a3021ac29e5cc71e01e4caa601195.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/timeline'
 */
        Controller7f2a3021ac29e5cc71e01e4caa601195Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller7f2a3021ac29e5cc71e01e4caa601195.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller7f2a3021ac29e5cc71e01e4caa601195.form = Controller7f2a3021ac29e5cc71e01e4caa601195Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
const Controller4e0fc33d2847876649f958abaecf8f47 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4e0fc33d2847876649f958abaecf8f47.url(options),
    method: 'get',
})

Controller4e0fc33d2847876649f958abaecf8f47.definition = {
    methods: ["get","head"],
    url: '/demo/pages/starter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
Controller4e0fc33d2847876649f958abaecf8f47.url = (options?: RouteQueryOptions) => {
    return Controller4e0fc33d2847876649f958abaecf8f47.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
Controller4e0fc33d2847876649f958abaecf8f47.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4e0fc33d2847876649f958abaecf8f47.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
Controller4e0fc33d2847876649f958abaecf8f47.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller4e0fc33d2847876649f958abaecf8f47.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
    const Controller4e0fc33d2847876649f958abaecf8f47Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller4e0fc33d2847876649f958abaecf8f47.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
        Controller4e0fc33d2847876649f958abaecf8f47Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller4e0fc33d2847876649f958abaecf8f47.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
        Controller4e0fc33d2847876649f958abaecf8f47Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller4e0fc33d2847876649f958abaecf8f47.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller4e0fc33d2847876649f958abaecf8f47.form = Controller4e0fc33d2847876649f958abaecf8f47Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
const Controller91967120509d303f85ce3b600008d1c3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller91967120509d303f85ce3b600008d1c3.url(options),
    method: 'get',
})

Controller91967120509d303f85ce3b600008d1c3.definition = {
    methods: ["get","head"],
    url: '/demo/components/buttons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
Controller91967120509d303f85ce3b600008d1c3.url = (options?: RouteQueryOptions) => {
    return Controller91967120509d303f85ce3b600008d1c3.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
Controller91967120509d303f85ce3b600008d1c3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller91967120509d303f85ce3b600008d1c3.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
Controller91967120509d303f85ce3b600008d1c3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller91967120509d303f85ce3b600008d1c3.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
    const Controller91967120509d303f85ce3b600008d1c3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller91967120509d303f85ce3b600008d1c3.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
        Controller91967120509d303f85ce3b600008d1c3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller91967120509d303f85ce3b600008d1c3.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
        Controller91967120509d303f85ce3b600008d1c3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller91967120509d303f85ce3b600008d1c3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller91967120509d303f85ce3b600008d1c3.form = Controller91967120509d303f85ce3b600008d1c3Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
const Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url(options),
    method: 'get',
})

Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.definition = {
    methods: ["get","head"],
    url: '/demo/components/grid',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url = (options?: RouteQueryOptions) => {
    return Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
    const Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
        Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
        Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c.form = Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
const Controller3bd47f6133e2d6a654452014eba7192c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3bd47f6133e2d6a654452014eba7192c.url(options),
    method: 'get',
})

Controller3bd47f6133e2d6a654452014eba7192c.definition = {
    methods: ["get","head"],
    url: '/demo/components/panels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
Controller3bd47f6133e2d6a654452014eba7192c.url = (options?: RouteQueryOptions) => {
    return Controller3bd47f6133e2d6a654452014eba7192c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
Controller3bd47f6133e2d6a654452014eba7192c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3bd47f6133e2d6a654452014eba7192c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
Controller3bd47f6133e2d6a654452014eba7192c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller3bd47f6133e2d6a654452014eba7192c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
    const Controller3bd47f6133e2d6a654452014eba7192cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller3bd47f6133e2d6a654452014eba7192c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
        Controller3bd47f6133e2d6a654452014eba7192cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3bd47f6133e2d6a654452014eba7192c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
        Controller3bd47f6133e2d6a654452014eba7192cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3bd47f6133e2d6a654452014eba7192c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller3bd47f6133e2d6a654452014eba7192c.form = Controller3bd47f6133e2d6a654452014eba7192cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
const Controller4c48bfc5d0697b473800d87f3932187e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4c48bfc5d0697b473800d87f3932187e.url(options),
    method: 'get',
})

Controller4c48bfc5d0697b473800d87f3932187e.definition = {
    methods: ["get","head"],
    url: '/demo/components/alertify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
Controller4c48bfc5d0697b473800d87f3932187e.url = (options?: RouteQueryOptions) => {
    return Controller4c48bfc5d0697b473800d87f3932187e.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
Controller4c48bfc5d0697b473800d87f3932187e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4c48bfc5d0697b473800d87f3932187e.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
Controller4c48bfc5d0697b473800d87f3932187e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller4c48bfc5d0697b473800d87f3932187e.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
    const Controller4c48bfc5d0697b473800d87f3932187eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller4c48bfc5d0697b473800d87f3932187e.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
        Controller4c48bfc5d0697b473800d87f3932187eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller4c48bfc5d0697b473800d87f3932187e.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
        Controller4c48bfc5d0697b473800d87f3932187eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller4c48bfc5d0697b473800d87f3932187e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller4c48bfc5d0697b473800d87f3932187e.form = Controller4c48bfc5d0697b473800d87f3932187eForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
const Controller08f371b3b6d637e0c3d21bd7263cd55f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller08f371b3b6d637e0c3d21bd7263cd55f.url(options),
    method: 'get',
})

Controller08f371b3b6d637e0c3d21bd7263cd55f.definition = {
    methods: ["get","head"],
    url: '/demo/components/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
Controller08f371b3b6d637e0c3d21bd7263cd55f.url = (options?: RouteQueryOptions) => {
    return Controller08f371b3b6d637e0c3d21bd7263cd55f.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
Controller08f371b3b6d637e0c3d21bd7263cd55f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller08f371b3b6d637e0c3d21bd7263cd55f.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
Controller08f371b3b6d637e0c3d21bd7263cd55f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller08f371b3b6d637e0c3d21bd7263cd55f.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
    const Controller08f371b3b6d637e0c3d21bd7263cd55fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller08f371b3b6d637e0c3d21bd7263cd55f.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
        Controller08f371b3b6d637e0c3d21bd7263cd55fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller08f371b3b6d637e0c3d21bd7263cd55f.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
        Controller08f371b3b6d637e0c3d21bd7263cd55fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller08f371b3b6d637e0c3d21bd7263cd55f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller08f371b3b6d637e0c3d21bd7263cd55f.form = Controller08f371b3b6d637e0c3d21bd7263cd55fForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
const Controllerbcc9e75bee16fa8510dd22bfd24260fe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerbcc9e75bee16fa8510dd22bfd24260fe.url(options),
    method: 'get',
})

Controllerbcc9e75bee16fa8510dd22bfd24260fe.definition = {
    methods: ["get","head"],
    url: '/demo/components/icons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
Controllerbcc9e75bee16fa8510dd22bfd24260fe.url = (options?: RouteQueryOptions) => {
    return Controllerbcc9e75bee16fa8510dd22bfd24260fe.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
Controllerbcc9e75bee16fa8510dd22bfd24260fe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerbcc9e75bee16fa8510dd22bfd24260fe.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
Controllerbcc9e75bee16fa8510dd22bfd24260fe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerbcc9e75bee16fa8510dd22bfd24260fe.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
    const Controllerbcc9e75bee16fa8510dd22bfd24260feForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerbcc9e75bee16fa8510dd22bfd24260fe.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
        Controllerbcc9e75bee16fa8510dd22bfd24260feForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerbcc9e75bee16fa8510dd22bfd24260fe.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
        Controllerbcc9e75bee16fa8510dd22bfd24260feForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerbcc9e75bee16fa8510dd22bfd24260fe.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerbcc9e75bee16fa8510dd22bfd24260fe.form = Controllerbcc9e75bee16fa8510dd22bfd24260feForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
const Controller79851b74ae5d8f87e1950a336251ee56 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller79851b74ae5d8f87e1950a336251ee56.url(options),
    method: 'get',
})

Controller79851b74ae5d8f87e1950a336251ee56.definition = {
    methods: ["get","head"],
    url: '/demo/components/typography',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
Controller79851b74ae5d8f87e1950a336251ee56.url = (options?: RouteQueryOptions) => {
    return Controller79851b74ae5d8f87e1950a336251ee56.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
Controller79851b74ae5d8f87e1950a336251ee56.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller79851b74ae5d8f87e1950a336251ee56.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
Controller79851b74ae5d8f87e1950a336251ee56.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller79851b74ae5d8f87e1950a336251ee56.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
    const Controller79851b74ae5d8f87e1950a336251ee56Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller79851b74ae5d8f87e1950a336251ee56.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
        Controller79851b74ae5d8f87e1950a336251ee56Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller79851b74ae5d8f87e1950a336251ee56.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
        Controller79851b74ae5d8f87e1950a336251ee56Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller79851b74ae5d8f87e1950a336251ee56.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller79851b74ae5d8f87e1950a336251ee56.form = Controller79851b74ae5d8f87e1950a336251ee56Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
const Controller6b4b8dd8777c8cc3d9c2f27a2928dec2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url(options),
    method: 'get',
})

Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.definition = {
    methods: ["get","head"],
    url: '/demo/components/colors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url = (options?: RouteQueryOptions) => {
    return Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
    const Controller6b4b8dd8777c8cc3d9c2f27a2928dec2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
        Controller6b4b8dd8777c8cc3d9c2f27a2928dec2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
        Controller6b4b8dd8777c8cc3d9c2f27a2928dec2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller6b4b8dd8777c8cc3d9c2f27a2928dec2.form = Controller6b4b8dd8777c8cc3d9c2f27a2928dec2Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
const Controllercdd6a1299cdb5548f8b19906becbb271 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercdd6a1299cdb5548f8b19906becbb271.url(options),
    method: 'get',
})

Controllercdd6a1299cdb5548f8b19906becbb271.definition = {
    methods: ["get","head"],
    url: '/demo/charts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
Controllercdd6a1299cdb5548f8b19906becbb271.url = (options?: RouteQueryOptions) => {
    return Controllercdd6a1299cdb5548f8b19906becbb271.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
Controllercdd6a1299cdb5548f8b19906becbb271.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercdd6a1299cdb5548f8b19906becbb271.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
Controllercdd6a1299cdb5548f8b19906becbb271.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllercdd6a1299cdb5548f8b19906becbb271.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
    const Controllercdd6a1299cdb5548f8b19906becbb271Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllercdd6a1299cdb5548f8b19906becbb271.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
        Controllercdd6a1299cdb5548f8b19906becbb271Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllercdd6a1299cdb5548f8b19906becbb271.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
        Controllercdd6a1299cdb5548f8b19906becbb271Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllercdd6a1299cdb5548f8b19906becbb271.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllercdd6a1299cdb5548f8b19906becbb271.form = Controllercdd6a1299cdb5548f8b19906becbb271Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
const Controllerc42775621c573f982983335d0256ad81 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc42775621c573f982983335d0256ad81.url(options),
    method: 'get',
})

Controllerc42775621c573f982983335d0256ad81.definition = {
    methods: ["get","head"],
    url: '/demo/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
Controllerc42775621c573f982983335d0256ad81.url = (options?: RouteQueryOptions) => {
    return Controllerc42775621c573f982983335d0256ad81.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
Controllerc42775621c573f982983335d0256ad81.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc42775621c573f982983335d0256ad81.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
Controllerc42775621c573f982983335d0256ad81.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerc42775621c573f982983335d0256ad81.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
    const Controllerc42775621c573f982983335d0256ad81Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerc42775621c573f982983335d0256ad81.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
        Controllerc42775621c573f982983335d0256ad81Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc42775621c573f982983335d0256ad81.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
        Controllerc42775621c573f982983335d0256ad81Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc42775621c573f982983335d0256ad81.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerc42775621c573f982983335d0256ad81.form = Controllerc42775621c573f982983335d0256ad81Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
const Controller833160d896ca5c491d40d6242bd1cf2d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller833160d896ca5c491d40d6242bd1cf2d.url(options),
    method: 'get',
})

Controller833160d896ca5c491d40d6242bd1cf2d.definition = {
    methods: ["get","head"],
    url: '/demo/forms/regular',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
Controller833160d896ca5c491d40d6242bd1cf2d.url = (options?: RouteQueryOptions) => {
    return Controller833160d896ca5c491d40d6242bd1cf2d.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
Controller833160d896ca5c491d40d6242bd1cf2d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller833160d896ca5c491d40d6242bd1cf2d.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
Controller833160d896ca5c491d40d6242bd1cf2d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller833160d896ca5c491d40d6242bd1cf2d.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
    const Controller833160d896ca5c491d40d6242bd1cf2dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller833160d896ca5c491d40d6242bd1cf2d.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
        Controller833160d896ca5c491d40d6242bd1cf2dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller833160d896ca5c491d40d6242bd1cf2d.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/regular'
 */
        Controller833160d896ca5c491d40d6242bd1cf2dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller833160d896ca5c491d40d6242bd1cf2d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller833160d896ca5c491d40d6242bd1cf2d.form = Controller833160d896ca5c491d40d6242bd1cf2dForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
const Controllerbbedb942393ddb5dc3798b2a2d078f21 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerbbedb942393ddb5dc3798b2a2d078f21.url(options),
    method: 'get',
})

Controllerbbedb942393ddb5dc3798b2a2d078f21.definition = {
    methods: ["get","head"],
    url: '/demo/forms/extended',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
Controllerbbedb942393ddb5dc3798b2a2d078f21.url = (options?: RouteQueryOptions) => {
    return Controllerbbedb942393ddb5dc3798b2a2d078f21.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
Controllerbbedb942393ddb5dc3798b2a2d078f21.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerbbedb942393ddb5dc3798b2a2d078f21.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
Controllerbbedb942393ddb5dc3798b2a2d078f21.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerbbedb942393ddb5dc3798b2a2d078f21.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
    const Controllerbbedb942393ddb5dc3798b2a2d078f21Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerbbedb942393ddb5dc3798b2a2d078f21.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
        Controllerbbedb942393ddb5dc3798b2a2d078f21Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerbbedb942393ddb5dc3798b2a2d078f21.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/extended'
 */
        Controllerbbedb942393ddb5dc3798b2a2d078f21Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerbbedb942393ddb5dc3798b2a2d078f21.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerbbedb942393ddb5dc3798b2a2d078f21.form = Controllerbbedb942393ddb5dc3798b2a2d078f21Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
const Controllerc7996fb7a1b58fcd045f7337e0773ff7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc7996fb7a1b58fcd045f7337e0773ff7.url(options),
    method: 'get',
})

Controllerc7996fb7a1b58fcd045f7337e0773ff7.definition = {
    methods: ["get","head"],
    url: '/demo/forms/validation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
Controllerc7996fb7a1b58fcd045f7337e0773ff7.url = (options?: RouteQueryOptions) => {
    return Controllerc7996fb7a1b58fcd045f7337e0773ff7.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
Controllerc7996fb7a1b58fcd045f7337e0773ff7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc7996fb7a1b58fcd045f7337e0773ff7.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
Controllerc7996fb7a1b58fcd045f7337e0773ff7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerc7996fb7a1b58fcd045f7337e0773ff7.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
    const Controllerc7996fb7a1b58fcd045f7337e0773ff7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerc7996fb7a1b58fcd045f7337e0773ff7.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
        Controllerc7996fb7a1b58fcd045f7337e0773ff7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc7996fb7a1b58fcd045f7337e0773ff7.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/validation'
 */
        Controllerc7996fb7a1b58fcd045f7337e0773ff7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc7996fb7a1b58fcd045f7337e0773ff7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerc7996fb7a1b58fcd045f7337e0773ff7.form = Controllerc7996fb7a1b58fcd045f7337e0773ff7Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
const Controller3f3deed47bb706c0c5ecf7ad93a509fb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3f3deed47bb706c0c5ecf7ad93a509fb.url(options),
    method: 'get',
})

Controller3f3deed47bb706c0c5ecf7ad93a509fb.definition = {
    methods: ["get","head"],
    url: '/demo/forms/wizard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
Controller3f3deed47bb706c0c5ecf7ad93a509fb.url = (options?: RouteQueryOptions) => {
    return Controller3f3deed47bb706c0c5ecf7ad93a509fb.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
Controller3f3deed47bb706c0c5ecf7ad93a509fb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3f3deed47bb706c0c5ecf7ad93a509fb.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
Controller3f3deed47bb706c0c5ecf7ad93a509fb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller3f3deed47bb706c0c5ecf7ad93a509fb.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
    const Controller3f3deed47bb706c0c5ecf7ad93a509fbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller3f3deed47bb706c0c5ecf7ad93a509fb.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
        Controller3f3deed47bb706c0c5ecf7ad93a509fbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3f3deed47bb706c0c5ecf7ad93a509fb.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/forms/wizard'
 */
        Controller3f3deed47bb706c0c5ecf7ad93a509fbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3f3deed47bb706c0c5ecf7ad93a509fb.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller3f3deed47bb706c0c5ecf7ad93a509fb.form = Controller3f3deed47bb706c0c5ecf7ad93a509fbForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
const Controller982552e12e82b7f14b56bbbad3fbc405 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller982552e12e82b7f14b56bbbad3fbc405.url(options),
    method: 'get',
})

Controller982552e12e82b7f14b56bbbad3fbc405.definition = {
    methods: ["get","head"],
    url: '/demo/tables/regular',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
Controller982552e12e82b7f14b56bbbad3fbc405.url = (options?: RouteQueryOptions) => {
    return Controller982552e12e82b7f14b56bbbad3fbc405.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
Controller982552e12e82b7f14b56bbbad3fbc405.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller982552e12e82b7f14b56bbbad3fbc405.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
Controller982552e12e82b7f14b56bbbad3fbc405.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller982552e12e82b7f14b56bbbad3fbc405.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
    const Controller982552e12e82b7f14b56bbbad3fbc405Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller982552e12e82b7f14b56bbbad3fbc405.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
        Controller982552e12e82b7f14b56bbbad3fbc405Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller982552e12e82b7f14b56bbbad3fbc405.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/regular'
 */
        Controller982552e12e82b7f14b56bbbad3fbc405Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller982552e12e82b7f14b56bbbad3fbc405.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller982552e12e82b7f14b56bbbad3fbc405.form = Controller982552e12e82b7f14b56bbbad3fbc405Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
const Controller0e14aa2d3c651af36e4c56d24b632d4e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0e14aa2d3c651af36e4c56d24b632d4e.url(options),
    method: 'get',
})

Controller0e14aa2d3c651af36e4c56d24b632d4e.definition = {
    methods: ["get","head"],
    url: '/demo/tables/extended',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
Controller0e14aa2d3c651af36e4c56d24b632d4e.url = (options?: RouteQueryOptions) => {
    return Controller0e14aa2d3c651af36e4c56d24b632d4e.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
Controller0e14aa2d3c651af36e4c56d24b632d4e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0e14aa2d3c651af36e4c56d24b632d4e.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
Controller0e14aa2d3c651af36e4c56d24b632d4e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller0e14aa2d3c651af36e4c56d24b632d4e.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
    const Controller0e14aa2d3c651af36e4c56d24b632d4eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller0e14aa2d3c651af36e4c56d24b632d4e.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
        Controller0e14aa2d3c651af36e4c56d24b632d4eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0e14aa2d3c651af36e4c56d24b632d4e.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/extended'
 */
        Controller0e14aa2d3c651af36e4c56d24b632d4eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0e14aa2d3c651af36e4c56d24b632d4e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller0e14aa2d3c651af36e4c56d24b632d4e.form = Controller0e14aa2d3c651af36e4c56d24b632d4eForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
const Controller441090d378d8ec3ffbf470911c6468ee = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller441090d378d8ec3ffbf470911c6468ee.url(options),
    method: 'get',
})

Controller441090d378d8ec3ffbf470911c6468ee.definition = {
    methods: ["get","head"],
    url: '/demo/tables/datatables',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
Controller441090d378d8ec3ffbf470911c6468ee.url = (options?: RouteQueryOptions) => {
    return Controller441090d378d8ec3ffbf470911c6468ee.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
Controller441090d378d8ec3ffbf470911c6468ee.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller441090d378d8ec3ffbf470911c6468ee.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
Controller441090d378d8ec3ffbf470911c6468ee.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller441090d378d8ec3ffbf470911c6468ee.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
    const Controller441090d378d8ec3ffbf470911c6468eeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller441090d378d8ec3ffbf470911c6468ee.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
        Controller441090d378d8ec3ffbf470911c6468eeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller441090d378d8ec3ffbf470911c6468ee.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/tables/datatables'
 */
        Controller441090d378d8ec3ffbf470911c6468eeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller441090d378d8ec3ffbf470911c6468ee.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller441090d378d8ec3ffbf470911c6468ee.form = Controller441090d378d8ec3ffbf470911c6468eeForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
    const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

/**
* Multiple routes resolve to \Inertia\Controller::Controller, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `Controller['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
const Controller = {
    '/timeline': Controller7f2a3021ac29e5cc71e01e4caa601195,
    '/demo/pages/starter': Controller4e0fc33d2847876649f958abaecf8f47,
    '/demo/components/buttons': Controller91967120509d303f85ce3b600008d1c3,
    '/demo/components/grid': Controllerd1815f1ef9dfdb28b8b7a5cc5b7a0a1c,
    '/demo/components/panels': Controller3bd47f6133e2d6a654452014eba7192c,
    '/demo/components/alertify': Controller4c48bfc5d0697b473800d87f3932187e,
    '/demo/components/notifications': Controller08f371b3b6d637e0c3d21bd7263cd55f,
    '/demo/components/icons': Controllerbcc9e75bee16fa8510dd22bfd24260fe,
    '/demo/components/typography': Controller79851b74ae5d8f87e1950a336251ee56,
    '/demo/components/colors': Controller6b4b8dd8777c8cc3d9c2f27a2928dec2,
    '/demo/charts': Controllercdd6a1299cdb5548f8b19906becbb271,
    '/demo/calendar': Controllerc42775621c573f982983335d0256ad81,
    '/demo/forms/regular': Controller833160d896ca5c491d40d6242bd1cf2d,
    '/demo/forms/extended': Controllerbbedb942393ddb5dc3798b2a2d078f21,
    '/demo/forms/validation': Controllerc7996fb7a1b58fcd045f7337e0773ff7,
    '/demo/forms/wizard': Controller3f3deed47bb706c0c5ecf7ad93a509fb,
    '/demo/tables/regular': Controller982552e12e82b7f14b56bbbad3fbc405,
    '/demo/tables/extended': Controller0e14aa2d3c651af36e4c56d24b632d4e,
    '/demo/tables/datatables': Controller441090d378d8ec3ffbf470911c6468ee,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller