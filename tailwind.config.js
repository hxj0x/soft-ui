import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                default: colors.zinc,
                primary: colors.blue,
                secondary: colors.purple,
                success: colors.green,
                warning: colors.yellow,
                danger: colors.red,
            },
        },
    },
    plugins: [],
};
