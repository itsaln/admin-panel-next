import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ avatarPath: string, link: string, title?: string }> = ({ avatarPath , link, title}) => {
	return (
		<Link href={link}>
			<a title={title}>
				<Image
					className={styles.avatar}
					src={avatarPath}
					width={46}
					height={46} alt=''
				/>
			</a>
		</Link>
	)
}

export default UserAvatar
