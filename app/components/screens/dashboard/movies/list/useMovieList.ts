import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { MovieService } from '@/services/movie.service'

export const useMovieList = () => {
	const { push } = useRouter()

	const { data: response, isLoading } = useQuery(['get all movies'], () =>
		MovieService.findAll()
	)
	const queryClient = useQueryClient()
	const { mutate } = useMutation(
		['remove movie'],
		(id: number) => MovieService.remove(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all movies'])
			}
		}
	)
	const { mutate: create } = useMutation(
		['create movie'],
		() => MovieService.create(),
		{
			onSuccess: ({ data: id }) => {
				push(`/manage/movies/edit/${id}`)
			}
		}
	)

	return {
		response,
		isLoading,
		mutate,
		create
	}
}
