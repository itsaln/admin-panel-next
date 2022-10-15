import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { StatisticsService } from '@/services/statistics/statistics.service'
import Heading from '@/ui/heading/Heading'
import StatisticItem from '@/ui/statistic-item/StatisticItem'
import styles from './MainStatistics.module.scss'

const MainStatistics: FC = () => {
	const { data, isLoading } = useQuery(
		['get statistics'],
		() => StatisticsService.getMain()
	)

	return (
		<div>
			<Heading>Main Statistics</Heading>

			{isLoading ? <p>loading...</p> : data?.length ?
				(<div className='grid grid-cols-4 gap-8'>
						{data.map(item =>
							<StatisticItem
								item={item}
								key={item.id}
							/>
						)}
					</div>
				) : (
					<div>Statistics not found</div>
				)
			}
		</div>
	)
}

export default MainStatistics
