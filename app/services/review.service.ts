import interceptor from '../api/interceptor'
import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return interceptor.post<IReview>('/review', body)
	}
}
