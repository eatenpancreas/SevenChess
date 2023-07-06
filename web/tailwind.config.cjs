/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'naia-teal': '#349D84',
				'naia-teal-faded': '#3F7A74',
				'naia-pink-l': '#FFC1C1',
				'naia-pink-m': '#FC9494',
				'naia-pink-d': '#5A2323',
				'naia-orange': '#FFD7B4',
				'naia-gray-l': '#F1F1F1',
				'naia-gray-m': '#E2E2E2',
				'naia-gray-d': '#6B6969',
				'naia-blue': "#379FFF",
				'naia-red': "#E10000",
				'naia-shadow': "rgba(0,0,0,0.51)",
			}

		}
	},

	plugins: []
};

module.exports = config;
