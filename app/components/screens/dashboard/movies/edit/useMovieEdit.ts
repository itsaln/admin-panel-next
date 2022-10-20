import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { IMovieDto } from '@/shared/interfaces/movie.interfaces'

import { MovieService } from '@/services/movie.service'

export const useMovieEdit = () => {
	const { query, push } = useRouter()
	const movieId = Number(query.id)

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IMovieDto>({
		mode: 'onChange'
	})

	const { isLoading } = useQuery(
		['get movie by id'],
		() => MovieService.findOne(movieId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('fees', data.fees)
				setValue('poster', data.poster)
			},
			enabled: !!movieId
		}
	)

	const { mutate } = useMutation(['update movie', movieId], (data: IMovieDto) =>
		MovieService.update(movieId, data),
		{
			onSuccess: () => {
				push('/manage/movies')
			}
		}
	)

	return {
		isLoading,
		mutate,
		handleSubmit,
		register,
		errors,
		control
	}
}
