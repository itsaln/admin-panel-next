import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

import axios from '@/api/interceptor'

export const ReviewService = {
	async create(body: IReviewDto) {
		return axios.post<IReview>('/review', body)
	},

	async findOne(id: number) {
		return axios.get<IReview>(`review/${id}`)
	},

	async findAll() {
		return axios.get<IReview[]>('/review')
	},

	async remove(id: number) {
		return axios.delete(`/review/${id}`)
	}
}
