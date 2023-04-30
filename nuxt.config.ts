export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'es',
                'data-theme': 'cmyk',
            },
            title: 'tugangaelectronic.com',
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.cdnfonts.com/css/proxima-nova-2'  
                }
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss',[
        '@pinia/nuxt',
        {
          autoImports: ['defineStore',
            ['defineStore', 'definePiniaStore'],
          ],
        },
      ],],
    pages: true,
})

