import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig } from 'vite';
import scaffold from './vite.scaffold.mjs';

export default defineConfig({
    plugins: [
        scaffold(),
        laravel({
            input: ['resources/sass/scaffold.scss', 'resources/js/scaffold.app.js'],
            refresh: true,
            fonts: [bunny('Roboto', {
                weights: [300, 400, 500, 700],
                subsets: ['latin', 'latin-ext'],
            })],
        }),
        inertia({ ssr: 'resources/js/scaffold.app.js' }),
        vue({ template: { transformAssetUrls: { base: null, includeAbsolute: false } } }),
        wayfinder({ formVariants: true }),
    ],
});
