const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                orange: {
                    default: '#fc9143',
                },
                gray: {
                    dark: '#303030',
                    default: '#606060',
                },
                blue: {
                    default: '#0097ec',
                },
                'primary-orange': '#fc9143',
            },
            fontFamily: {
                sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
                mplus: ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
