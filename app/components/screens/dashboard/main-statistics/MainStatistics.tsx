import { FC } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import StatisticItem from '@/ui/statistic-item/StatisticItem'
import Heading from '@/ui/heading/Heading'
import styles from './MainStatistics.module.scss'

const MainStatistics: FC = () => {
	return (
		<div>
			<Heading>Main Statistics</Heading>

			<div className='grid grid-cols-4 gap-8'>
				<StatisticItem item={{
					Icon: AiOutlineEye,
					name: 'Views',
					value: 200
				}} />
			</div>
		</div>
	)
}

export default MainStatistics
