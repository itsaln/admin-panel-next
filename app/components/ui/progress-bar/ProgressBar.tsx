import { motion } from 'framer-motion'
import { FC } from 'react'

import { UseProgressAnimate } from '@/ui/progress-bar/useProgressAnimate'

import styles from './ProgressBar.module.scss'

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	const { variants } = UseProgressAnimate(percent)

	return (
		<div className={styles.progress}>
			<div className={styles.overflow}>
				<motion.div
					{...variants}
					className={styles.bar}
					// style={{
					// 	transform: `rotate(${45 + percent * 1.8}deg)`
					// }}
				/>
			</div>
			<div className={styles.percent}>{percent}%</div>
		</div>
	)
}

export default ProgressBar
