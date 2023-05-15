export default defineNuxtConfig({
    nitro: {
        compressPublicAssets: true,
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'es',
                'data-theme': 'tugangaelectronic',
            },
            title: 'tugangaelectronic.com',
            meta: [
                { name: 'La tienda virtual de Venezuela', content: 'My amazing site.' }
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.cdnfonts.com/css/proxima-nova-2'
                },
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: 'tugangaelectronic-logo-32.svg'
                }
            
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss', [
        '@pinia/nuxt',
        {
            autoImports: ['defineStore',
                ['defineStore', 'definePiniaStore'],
            ],
        },
    ],],
    pages: true,
})

