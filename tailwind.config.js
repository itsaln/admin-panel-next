const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#5F3DF7'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '350ms'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}
			})
		})
	]
}
