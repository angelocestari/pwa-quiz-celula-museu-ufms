import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import {VitePWA} from "vite-plugin-pwa";
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    base: '/quiz-celula-eucarionte/',
    server: {
        https: true
    },
    plugins: [
        vue(),
        vueDevTools(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: false
            },
            manifest: {
                name: 'Sala Imersiva - UFMS',
                short_name: 'Sala Imersiva',
                description: 'Quiz sobre a célula eucarionte para a sala imersiva da UFMS',
                theme_color: '#0088B7',
                background_color: '#fff',
                display: 'standalone',
                icons: [
                    {
                        src: '/quiz-celula-eucarionte/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/quiz-celula-eucarionte/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
                screenshots: [
                    {
                        src: '/quiz-celula-eucarionte/homepage.png',
                        sizes: '2880x1704',
                        type: 'image/png',
                    }
                ]
            }
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
