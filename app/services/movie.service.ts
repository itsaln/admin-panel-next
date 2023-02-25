import { IMovie, IMovieDto } from '@/shared/interfaces/movie.interfaces'

import axios, { axiosClassic } from '@/api/interceptor'

export const MovieService = {
	async create() {
		return axios.post<number>('/movie')
	},

	async findOne(id: number) {
		return axiosClassic.get<IMovie>(`movie/${id}`)
	},

	async findAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>('/movie', {
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async update(id: number, body: IMovieDto) {
		return axios.put<IMovie>(`/movie/${id}`, body)
	},

	async remove(id: number) {
		return axios.delete(`/movie/${id}`)
	}
}
