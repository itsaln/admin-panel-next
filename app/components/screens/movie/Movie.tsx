import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import Reviews from '@/screens/movie/reviews/Reviews'

import Layout from '@/ui/layout/Layout'

import { MovieService } from '@/services/movie.service'
import { ViewsService } from '@/services/views.service'

import styles from './Movie.module.scss'

const Movie: FC = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)

	const {
		refetch,
		data: movie,
		isLoading
	} = useQuery(
		['get movie', query?.id],
		() => MovieService.findOne(movieId),
		{
			enabled: !!movieId,
			select: ({ data }) => data
		}
	)

	const { mutate } = useMutation(['update count opened'], () =>
		ViewsService.updateViews(movieId.toString())
	)

	useEffect(() => {
		if (movieId) mutate()
	}, [movieId])

	return (
		<Layout title={`${movie?.name} | itsaln`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					{movie?.poster && (
						<Image
							width={220}
							height={330}
							src={movie?.poster}
							alt={movie?.name}
							layout='responsive'
							className={styles.image}
						/>
					)}
				</div>

				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.rating}>{movie?.rating?.toFixed(1)}</div>
					<div className={styles.title}>About movie</div>
					<ul>
						<li>
							<span>Fees in the world</span>
							<span>${movie?.fees.toLocaleString()}</span>
						</li>
					</ul>
					<Reviews
						movieId={movieId}
						reviews={movie?.reviews || []}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Movie
