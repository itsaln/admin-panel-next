export interface IViewsByMonth {
	views: string
	month: Date
}

export interface IMiddleStatisticsResponse {
	totalFees: number
	viewsByMonth: IViewsByMonth[]
}
