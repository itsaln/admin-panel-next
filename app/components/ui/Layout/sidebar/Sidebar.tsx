import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { menu } from '@/ui/layout/sidebar/menu.data'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { asPath } = useRouter()

	return (
		<aside className={styles.sidebar}>
			<div>
				<Link href='/'>
					<a className={styles.logo}>
						R
					</a>
				</Link>

				<nav className={styles.menu}>
					<ul>
						{menu.map(item => (
							<li key={item.link} className={cn(styles.item, {
								[styles.active]: item.link === asPath
							})}>
								<Link href={item.link}>
									<a>
										<item.Icon />
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* TODO:	Change theme dark/light */}
		</aside>
	)
}

export default Sidebar
