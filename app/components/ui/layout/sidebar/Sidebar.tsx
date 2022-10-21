import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { menu } from '@/ui/layout/sidebar/menu.data'

import styles from './Sidebar.module.scss'
import Switcher from '@/ui/switcher/Switcher'

const Sidebar: FC = () => {
	const { asPath } = useRouter()

	return (
		<aside className={styles.sidebar}>
			<div>
				<Link href='/'>
					<a className={styles.logo}>R</a>
				</Link>

				<nav className={styles.menu}>
					<ul>
						{menu.map(item => (
							<li
								key={item.link}
								className={cn(styles.item, {
									[styles.active]: item.link === asPath
								})}
							>
								<Link href={item.link}>
									<a>
										<item.Icon />
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Switcher />
			</div>
		</aside>
	)
}

export default Sidebar
