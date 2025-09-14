export default {
    extends: ["docus"],
    modules: ["@nuxtjs/plausible", "@nuxtjs/i18n"],
    css: ["~/assets/css/main.css"],
    site: {
        name: "Docus",
    },
    i18n: {
        defaultLocale: "en",
        locales: [{ code: "en", name: "English" }],
        strategy: "prefix_except_default",
    },
    compatibilityDate: "2025-07-18",
}
