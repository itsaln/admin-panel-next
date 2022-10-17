import { useMutation, useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

import { MovieService } from '@/services/movie.service'
import Button from '@/ui/button/Button'

const MovieList: FC = () => {
	const { data: response, isLoading } = useQuery(['get all movies'], () =>
		MovieService.findAll()
	)

	const { mutate } = useMutation(['remove movie'], (id: number) =>
		MovieService.remove(id)
	)

	return (
		<Layout title='Movie list'>
			<div className='flex-center-between relative'>
				<Heading isMargin={false}>Movie list</Heading>
				<Button>Create movie</Button>
			</div>
			<Table
				items={
					response?.data.length
						? response.data.map(movie => ({
								id: movie.id,
								name: movie.name,
								image: movie.poster,
								viewLink: `movie/${movie.id}`,
								editLink: `/manage/movies/edit/${movie.id}`,
								removeHandler: () => mutate(movie.id)
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default MovieList
