import instance from '../../api/interceptor'
import { IMiddleStatisticsResponse } from '@/services/statistics/statistics.interface'
import { IStatisticItem } from '@/ui/statistic-item/statistic-item.interface'

export const StatisticsService = {
	async getMain() {
		return instance.get<IStatisticItem[]>('/statistics/main').then(({ data }) => data)
	},

	async getMiddle() {
		return instance.get<IMiddleStatisticsResponse>('/statistics/middle').then(({ data }) => data)
	}
}
