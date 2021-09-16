module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#2eb398',
                secoundary: '#323232',
                secoundaryText: '#228873',
            },
            hexaClip:
                'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);',

            screens: {
                '1xl': '1440px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
