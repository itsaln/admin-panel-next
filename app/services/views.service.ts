import { axiosClassic } from '../api/interceptor'

export const ViewsService = {
	async updateViews(movieId: string) {
		return axiosClassic.patch(`/views/update/${movieId}`)
	}
}
