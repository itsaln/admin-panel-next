import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip
} from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { IViewsByMonth } from '@/services/statistics/statistics.interface'

import styles from './ViewsChart.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				font: {
					size: 18
				}
			}
		},
		y: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				display: false
			}
		}
	},
	borderRadius: 16,
	borderSkipped: false,
	barThickness: 60,
	plugins: {
		tooltip: {
			backgroundColor: '#fff',
			titleColor: '#222',
			titleFont: {
				size: 18
			},
			bodyColor: '#222',
			bodyFont: {
				size: 16,
				weight: 500
			},
			titleAlign: 'center',
			padding: 12,
			displayColors: false,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString('ru-RU')
					}
				}
			}
		}
	}
}

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	return (
		<div className={styles.chart}>
			<Bar
				options={options as any}
				data={{
					labels: data.map(item => item.month),
					datasets: [
						{
							label: 'Dataset 1',
							data: data.map(item => item.views),
							backgroundColor: '#7a94fe'
						}
					]
				}}
			/>
		</div>
	)
}

export default ViewsChart
