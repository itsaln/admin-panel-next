import { IReview } from '@/shared/interfaces/review.interface'

export interface IMovie {
	name: string
	rating: number
	poster: string
	views: number
	reviews?: IReview[]
	fees: number
}

export interface IMovieDto extends Pick<IMovie, 'name' | 'fees' | 'poster'> {}
