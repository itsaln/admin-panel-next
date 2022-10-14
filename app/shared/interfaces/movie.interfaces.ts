import { IReview } from '@/shared/interfaces/review.interface'

export interface IMovie {
	id: number
	name: string
	rating: number | null
	poster: string
	views: number
	reviews?: IReview[]
	fees: number
}

export interface IMovieDto extends Pick<IMovie, 'name' | 'fees' | 'poster'> {}
