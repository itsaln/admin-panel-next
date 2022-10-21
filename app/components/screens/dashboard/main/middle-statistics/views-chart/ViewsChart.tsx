import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip
} from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { options } from '@/screens/dashboard/main/middle-statistics/views-chart/chart.options'

import { useTheme } from '@/hooks/useTheme'

import { IViewsByMonth } from '@/services/statistics/statistics.interface'

import styles from './ViewsChart.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	const { isDarkTheme } = useTheme()

	return (
		<div className={styles.chart}>
			<Bar
				options={options(isDarkTheme)}
				data={{
					labels: data.map((item) => item.month),
					datasets: [
						{
							label: 'Dataset 1',
							data: data.map((item) => item.views),
							backgroundColor: isDarkTheme ? '#6b6bbf' : '#7a94fe'
						}
					]
				}}
			/>
		</div>
	)
}

export default ViewsChart
