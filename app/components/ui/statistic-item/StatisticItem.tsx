import cn from 'classnames'
import { FC } from 'react'

import AnimatedCounter from '@/ui/AnimatedCounter'
import { IStatisticItem } from '@/ui/statistic-item/statistic-item.interface'
import { getIcon } from '@/ui/statistic-item/statistics.util'

import styles from './StatisticItem.module.scss'

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	const Icon = getIcon(item.id)

	return (
		<div className={cn(styles.item, styles[`color_${item.id}`])}>
			<div className={styles.icon}>
				<Icon />
			</div>
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>
				<AnimatedCounter to={item.value} />
			</div>
		</div>
	)
}

export default StatisticItem
