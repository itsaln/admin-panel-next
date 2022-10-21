const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		fontSize: {
			xs: '1rem',
			sm: '1.1rem',
			tiny: '1.19rem',
			base: '1.27rem',
			lg: '1.4rem',
			xl: '1.64rem',
			'2xl': '1.825rem',
			'3xl': '2.2rem',
			'4xl': '2.7rem',
			'5xl': '3.25rem',
			'6xl': '4.3rem',
			'7xl': '5.8rem'
		},
		extend: {
			colors: {
				primary: '#5F3DF7',
				black: '#222'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease'
			},
			transitionDuration: {
				DEFAULT: '250ms'
			}
		}
	},
	plugins: [
		require('tailwindcss-global-dark'),
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icon': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#fff',
					borderRadius: '50%',
					fontSize: '2rem',
					color: '#353538',
					padding: '0.4rem',
					transition: 'box-shadow .4s ease-in-out',
					boxShadow: '0 3px 6px rgba(45, 8, 125, 0.2)',

					'&:hover': {
						boxShadow: '0 4px 16px rgba(45, 8, 125, 0.26)'
					}
				}
			})
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
				},
				'.shadow-purple': {
					boxShadow: '0 3px 6px rgba(45, 8, 125, 0.2)'
				}
			})
		})
	]
}
