import { IStatisticItem } from '@/ui/statistic-item/statistic-item.interface'

import { IMiddleStatisticsResponse } from '@/services/statistics/statistics.interface'

import axios from '@/api/interceptor'

export const StatisticsService = {
	async getMain() {
		return axios
			.get<IStatisticItem[]>('/statistics/main')
			.then(({ data }) => data)
	},

	async getMiddle() {
		return axios
			.get<IMiddleStatisticsResponse>('/statistics/middle')
			.then(({ data }) => data)
	}
}
