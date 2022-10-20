import { FC } from 'react'

import { useMovieList } from '@/screens/dashboard/movies/list/useMovieList'

import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

const MovieList: FC = () => {
	const { create, mutate, isLoading, response } = useMovieList()

	return (
		<Layout title='Movie list'>
			<div className='flex-center-between relative'>
				<Heading isMargin={false}>Movie list</Heading>
				<Button onClick={() => create()}>Create movie</Button>
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
