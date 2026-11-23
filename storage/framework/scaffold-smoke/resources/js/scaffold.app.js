import { createInertiaApp } from '@inertiajs/vue3';
import options from './scaffold.options';
import {
    createScaffoldResolver,
    installScaffold,
    AuthenticatedLayout,
    GuestLayout,
} from './scaffold';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: createScaffoldResolver(import.meta.glob('./pages/**/*.vue')),
    layout: (name) =>
        name.startsWith('errors/')
            ? null
            : name.startsWith('auth/')
              ? GuestLayout
              : AuthenticatedLayout,
    withApp: (app) => installScaffold(app, options),
});
