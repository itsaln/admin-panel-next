import { IUser } from '@/shared/interfaces/user.interfaces'
import { IMovie } from '@/shared/interfaces/movie.interfaces'

export interface IReview {
	id: number
	user: IUser
	movie: IMovie
	description: string
}

export interface IReviewDto extends Pick<IReview, 'description'> {
	movieId: number
}
