const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
            },
            fontFamily: {
                sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
                mplus: ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
            },

            backgroundImage: {
                home: "url('/src/assets/images/home.jpg')",
                search: "url('/src/assets/icons/search/searchIcon.svg')",
            },
        },
    },
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [],
}
