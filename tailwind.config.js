module.exports = {
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`,
    ],
    theme: {
        extend: {
            colors: {
                brand: "#dd231c", //red
                "brand-blue": "#3F88C5", //darker-blue
                "brand-dark-blue": "#151e3f", //dark-blue
                "brand-green": "#17A398", //green
                "brand-yellow": "#FFB627", //yellow
            },
        },
    },
    plugins: [],
};