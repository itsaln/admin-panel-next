import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Loader from '@/ui/Loader'
import Heading from '@/ui/heading/Heading'
import StatisticItem from '@/ui/statistic-item/StatisticItem'

import { StatisticsService } from '@/services/statistics/statistics.service'

const MainStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get main statistics'], () =>
		StatisticsService.getMain()
	)

	return (
		<div>
			<Heading>Main Statistics</Heading>

			{isLoading ? (
				<Loader />
			) : data?.length ? (
				<div className='grid grid-cols-4 gap-8'>
					{data.map(item => (
						<StatisticItem item={item} key={item.id} />
					))}
				</div>
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	)
}

export default MainStatistics
