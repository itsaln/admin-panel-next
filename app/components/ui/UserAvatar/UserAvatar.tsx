import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ avatarPath: string }> = ({ avatarPath }) => {
	return (
		<Link href='/dashboard'>
			<a>
				<Image className={styles.avatar} src={avatarPath} width={40} height={40} alt='' />
			</a>
		</Link>
	)
}

export default UserAvatar
