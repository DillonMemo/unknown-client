/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    // i18n: {
    //   // ISO Language code -> http://www.lingoes.net/en/translator/langcode.htm
    //   // These are all the locales you want to support in
    //   // your application
    //   locales: ['ko', 'ja'],
    //   // This is the default locale you want to be used when visiting
    //   // a non-locale prefixed path e.g. `/hello`
    //   defaultLocale: 'ko',
    // },
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

module.exports = nextConfig;
