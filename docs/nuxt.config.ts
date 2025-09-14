export default defineNuxtConfig({
    extends: ["../layer"],
    modules: ["@nuxtjs/plausible", "@nuxtjs/i18n"],
    css: ["~/assets/css/main.css"],

    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://documents-docs.vercel.app",
        },
    },

    content: {
        documentDriven: true,
        navigation: {
            fields: ["icon", "titleTemplate"],
        },
    },

    site: {
        name: "Documentation",
        url: process.env.NUXT_PUBLIC_SITE_URL || "https://documents-docs.vercel.app",
    },

    i18n: {
        defaultLocale: "en",
        locales: [{ code: "en", name: "English" }],
        strategy: "prefix_except_default",
    },

    compatibilityDate: "2025-07-18",
})
