import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import Header from '@/ui/layout/header/Header'
import Sidebar from '@/ui/layout/sidebar/Sidebar'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	const { user } = useAuth()

	return (
		<>
			<Meta {...meta} />
			<section className={user ? styles.wrapper : ''}>
				{user && <Sidebar />}
				<div className={user ? styles.content : ''}>
					<Header />
					<main className={cn(styles.main, 'custom-scroll')}>{children}</main>
				</div>
			</section>
		</>
	)
}

export default Layout
