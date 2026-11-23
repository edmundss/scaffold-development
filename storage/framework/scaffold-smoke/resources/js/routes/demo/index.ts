import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import forms from './forms'
import tables from './tables'
import userProfile7f74e4 from './user-profile'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
export const starter = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: starter.url(options),
    method: 'get',
})

starter.definition = {
    methods: ["get","head"],
    url: '/demo/pages/starter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
starter.url = (options?: RouteQueryOptions) => {
    return starter.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
starter.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: starter.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
starter.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: starter.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
    const starterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: starter.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
        starterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: starter.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/pages/starter'
 */
        starterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: starter.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    starter.form = starterForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
export const buttons = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buttons.url(options),
    method: 'get',
})

buttons.definition = {
    methods: ["get","head"],
    url: '/demo/components/buttons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
buttons.url = (options?: RouteQueryOptions) => {
    return buttons.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
buttons.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buttons.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
buttons.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: buttons.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
    const buttonsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: buttons.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
        buttonsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: buttons.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/buttons'
 */
        buttonsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: buttons.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    buttons.form = buttonsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
export const grid = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grid.url(options),
    method: 'get',
})

grid.definition = {
    methods: ["get","head"],
    url: '/demo/components/grid',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
grid.url = (options?: RouteQueryOptions) => {
    return grid.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
grid.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grid.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
grid.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: grid.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
    const gridForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: grid.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
        gridForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grid.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/grid'
 */
        gridForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grid.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    grid.form = gridForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
export const panels = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: panels.url(options),
    method: 'get',
})

panels.definition = {
    methods: ["get","head"],
    url: '/demo/components/panels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
panels.url = (options?: RouteQueryOptions) => {
    return panels.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
panels.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: panels.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
panels.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: panels.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
    const panelsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: panels.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
        panelsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: panels.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/panels'
 */
        panelsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: panels.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    panels.form = panelsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
export const alertify = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: alertify.url(options),
    method: 'get',
})

alertify.definition = {
    methods: ["get","head"],
    url: '/demo/components/alertify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
alertify.url = (options?: RouteQueryOptions) => {
    return alertify.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
alertify.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: alertify.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
alertify.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: alertify.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
    const alertifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: alertify.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
        alertifyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: alertify.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/alertify'
 */
        alertifyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: alertify.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    alertify.form = alertifyForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/demo/components/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
notifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
notifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
    const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notifications.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
        notificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/notifications'
 */
        notificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notifications.form = notificationsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
export const icons = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icons.url(options),
    method: 'get',
})

icons.definition = {
    methods: ["get","head"],
    url: '/demo/components/icons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
icons.url = (options?: RouteQueryOptions) => {
    return icons.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
icons.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: icons.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
icons.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: icons.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
    const iconsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: icons.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
        iconsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: icons.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/icons'
 */
        iconsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: icons.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    icons.form = iconsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
export const typography = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: typography.url(options),
    method: 'get',
})

typography.definition = {
    methods: ["get","head"],
    url: '/demo/components/typography',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
typography.url = (options?: RouteQueryOptions) => {
    return typography.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
typography.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: typography.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
typography.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: typography.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
    const typographyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: typography.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
        typographyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: typography.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/typography'
 */
        typographyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: typography.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    typography.form = typographyForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
export const colors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: colors.url(options),
    method: 'get',
})

colors.definition = {
    methods: ["get","head"],
    url: '/demo/components/colors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
colors.url = (options?: RouteQueryOptions) => {
    return colors.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
colors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: colors.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
colors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: colors.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
    const colorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: colors.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
        colorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: colors.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/components/colors'
 */
        colorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: colors.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    colors.form = colorsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
export const charts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: charts.url(options),
    method: 'get',
})

charts.definition = {
    methods: ["get","head"],
    url: '/demo/charts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
charts.url = (options?: RouteQueryOptions) => {
    return charts.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
charts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: charts.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
charts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: charts.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
    const chartsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: charts.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
        chartsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: charts.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/charts'
 */
        chartsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: charts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    charts.form = chartsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/demo/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
    const calendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: calendar.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
        calendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: calendar.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demo/calendar'
 */
        calendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: calendar.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    calendar.form = calendarForm
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
export const userProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userProfile.url(options),
    method: 'get',
})

userProfile.definition = {
    methods: ["get","head"],
    url: '/demo/pages/user-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
userProfile.url = (options?: RouteQueryOptions) => {
    return userProfile.definition.url + queryParams(options)
}

/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
userProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userProfile.url(options),
    method: 'get',
})
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
userProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userProfile.url(options),
    method: 'head',
})

    /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
    const userProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: userProfile.url(options),
        method: 'get',
    })

            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
        userProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: userProfile.url(options),
            method: 'get',
        })
            /**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DemoUserProfileController::__invoke
 * @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DemoUserProfileController.php:14
 * @route '/demo/pages/user-profile'
 */
        userProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: userProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    userProfile.form = userProfileForm
const demo = {
    starter: Object.assign(starter, starter),
buttons: Object.assign(buttons, buttons),
grid: Object.assign(grid, grid),
panels: Object.assign(panels, panels),
alertify: Object.assign(alertify, alertify),
notifications: Object.assign(notifications, notifications),
icons: Object.assign(icons, icons),
typography: Object.assign(typography, typography),
colors: Object.assign(colors, colors),
charts: Object.assign(charts, charts),
calendar: Object.assign(calendar, calendar),
forms: Object.assign(forms, forms),
tables: Object.assign(tables, tables),
userProfile: Object.assign(userProfile, userProfile7f74e4),
}

export default demo