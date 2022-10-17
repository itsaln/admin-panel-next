import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<{ isMargin?: boolean }>> = ({
	children,
	isMargin = true
}) => {
	return <div className={cn(styles.heading, isMargin ? styles.margin : '')}>{children}</div>
}

export default Heading
