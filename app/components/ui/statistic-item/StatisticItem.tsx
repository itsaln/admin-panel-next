import { FC } from 'react'
import { IStatisticItem } from '@/ui/statistic-item/statistic-item.interface'
import styles from './StatisticItem.module.scss'

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<item.Icon />
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>{item.value}</div>
		</div>
	)
}

export default StatisticItem
