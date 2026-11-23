import { createInertiaApp } from '@inertiajs/vue3';
import AuthenticatedLayout from '@scaffold/layouts/AuthenticatedLayout.vue';
import GuestLayout from '@scaffold/layouts/GuestLayout.vue';
import { createScaffoldResolver } from '@scaffold/index.js';
import { installScaffold } from '@scaffold/bootstrap.js';
import scaffoldConfig from './scaffold/config';
import '../sass/app.scss';

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
    withApp: (app) => installScaffold(app, scaffoldConfig),
    progress: { color: '#4B5563' },
});
