import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={styles.heading}>{children}</div>
}

export default Heading
