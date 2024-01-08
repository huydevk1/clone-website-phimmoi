/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto'],
            },
            backgroundColor: {
                'bg-color': '#0f0f0fe6',
                'main-color': '#408BEA',
            },
            textColor: {
                'main-color': '#408BEA',
                'txt-gray': '#ffffff99',
                'title-color': '#ffffffcc',
            },
            borderColor: {
                'border-color': '#ffffff1a',
                'border-blue': '#408BEA',
            },
        },
    },
    plugins: [],
};
