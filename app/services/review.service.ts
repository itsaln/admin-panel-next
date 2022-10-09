import axios, { axiosClassic } from '../api/interceptor'
import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return axios.post<IReview>('/review', body)
	}
}
