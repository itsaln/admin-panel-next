import { FC } from 'react'
import Logo from '@/ui/Layout/header/Logo'
import LoginForm from '@/ui/Layout/header/login-form/LoginForm'
import Search from '@/ui/Layout/header/search/Search'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<LoginForm />
		</header>
	)
}

export default Header
