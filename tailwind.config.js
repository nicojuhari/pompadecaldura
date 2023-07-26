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
                color2: "#151e3f", //dark-blue
                color3: "#2274a5",
                color4: "#009b72",
            },
        },
    },
    plugins: [],
};