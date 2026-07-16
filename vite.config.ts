import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        
        // Matikan plugin wayfinder SAAT berada di server Vercel, 
        // tapi tetap nyalakan saat kamu sedang ngoding lokal di laptop.
        process.env.VERCEL ? null : wayfinder({
            formVariants: true,
        }),
    ],
    // ════════════════════════════════════════════════════════════
    // TAMBAHAN UNTUK MENGATASI ERROR VERCEL VITE BUILD
    // ════════════════════════════════════════════════════════════
    build: {
        dynamicImportVarsOptions: {
            exclude: ['path']
        }
    }
});