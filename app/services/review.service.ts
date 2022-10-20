import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

import interceptor from '../api/interceptor'

export const ReviewService = {
	async create(body: IReviewDto) {
		return interceptor.post<IReview>('/review', body)
	},

	async findOne(id: number) {
		return interceptor.get<IReview>(`review/${id}`)
	},

	async findAll() {
		return interceptor.get<IReview[]>('/review')
	},

	async remove(id: number) {
		return interceptor.delete(`/review/${id}`)
	}
}
