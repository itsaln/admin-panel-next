import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {
	HiOutlineExternalLink,
	HiOutlinePencil,
	HiOutlineTrash
} from 'react-icons/hi'

import { ITableItem } from '@/ui/table/table.interface'

import { useTheme } from '@/hooks/useTheme'

import styles from './Table.module.scss'

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	const { isDarkTheme } = useTheme()

	return (
		<div className={styles['table-item']}>
			<div className={styles.info}>
				<div>{item.id}</div>
				{item.image && (
					<Image width={33} height={50} src={item.image} alt={item.name} />
				)}
				<div className='truncate-one'>{item.name}</div>
			</div>
			<div className={styles.actions}>
				<a
					rel='noreferrer'
					href={item.viewLink}
					target='_blank'
					className={isDarkTheme ? 'text-purple-400' : 'text-primary'}
				>
					<HiOutlineExternalLink />
				</a>
				{item.editLink && (
					<Link href={item.editLink}>
						<a className={isDarkTheme ? 'text-blue-300' : 'text-blue-500'}>
							<HiOutlinePencil />
						</a>
					</Link>
				)}
				<button onClick={item.removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	)
}

export default TableItem
