import { IReview } from '@/shared/interfaces/review.interface'

export interface IReviews {
	movieId: number
	reviews: IReview[]
	isLoading: boolean
}
