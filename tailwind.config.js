/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts}", "./*.html"],
    theme: {
        extend: {
            colors: {
                // primary: "#02a6fb",
                // secondary: "#e2725b",
                // tertiary: "#5a6673",
                primary: "#a8388a",
                secondary: "#b8419b",
                tertiary: "#d560ba",
                quaternary: "#e58dd2",
                primaryContrast: "#EE6C4D",
                textColor: "#111",
                textColorLight: "#f3f4f6",
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "bounce-slow": "bounce 5s 1.5",
            }
        },
    },
    plugins: [],
};
