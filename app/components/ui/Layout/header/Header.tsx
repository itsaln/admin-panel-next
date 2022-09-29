import { FC } from 'react'

import styles from '@/ui/Layout/header/Header.module.scss'
import Logo from '@/ui/Layout/header/Logo'
import LoginForm from '@/ui/Layout/header/login-form/LoginForm'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	)
}

export default Header
