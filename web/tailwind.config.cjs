/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'2xs': "0.55rem"
			}
		}
	},

	plugins: []
};

module.exports = config;
