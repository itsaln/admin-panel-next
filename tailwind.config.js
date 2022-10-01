const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontSize: {
			xs: '1.1rem',
			sm: '1.21rem',
			tiny: '1.27rem',
			base: '1.46rem',
			xl: '1.825rem',
			'2xl': '2.2rem',
			'3xl': '2.7rem',
			'4xl': '3.25rem',
			'5xl': '4.3rem',
			'6xl': '5.8rem',
			'7xl': '7.3rem'
		},
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
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icon': {
					border: 'none',
					outline: 'none',
					borderRadius: '50%',
					cursor: 'pointer',
					padding: '0.6rem',
					backgroundColor: '#fff',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2.7rem',
					transition: 'box-shadow .4s ease-in-out',
					boxShadow: '0 3px 6px rgba(45, 8, 125, 0.2)',
					color: '#353538',

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
				}
			})
		})
	]
}
