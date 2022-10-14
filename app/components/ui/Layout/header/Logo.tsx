import { FC } from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<div className={styles.logo}>Itsaln</div>
		</Link>
	)
}

export default Logo
