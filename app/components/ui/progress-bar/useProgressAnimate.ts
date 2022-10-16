import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const UseProgressAnimate = (percent: number) => {
	const ref = useRef(null)
	const isInView = useInView(ref)

	const variants = {
		initial: {
			rotate: '49deg'
		},
		whileInView: {
			rotate: `${45 + percent * 1.8}deg`,
			transition: { type: 'easeInOut', duration: 2 }
		}
	}

	return { variants }
}
