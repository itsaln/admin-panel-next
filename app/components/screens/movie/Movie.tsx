import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import Layout from '@/ui/Layout/Layout'
import Reviews from '@/screens/movie/reviews/Reviews'
import { MovieService } from '@/services/movie.service'
import styles from '@/screens/home/Home.module.scss'

function Review(props: { movieId: number, reviews: any, isLoading: false | true }) {
	return null
}

const Movie: FC = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)

	const { refetch, data: movie, isLoading } = useQuery(
		['get movie', query?.id],
		() => MovieService.getMovieById(movieId),
		{
			select: ({ data }) => data
		}
	)

	return (
		<Layout title={`${movie?.name} | itsaln`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					{movie?.poster &&
					<Image
						width={220}
						height={330}
						src={movie?.poster}
						alt={movie?.name}
						layout='responsive'
						className={styles.image}
					/>
					}
					<div className={styles.rating}>
						{movie?.rating}
					</div>
				</div>

				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.title}>
						<ul>
							<li>
								<span>Сборы в мире</span>
								<span>${movie?.fees.toLocaleString()}</span>
							</li>
						</ul>
					</div>
				</div>

				<Reviews
					movieId={movieId}
					reviews={movie?.reviews || []}
					isLoading={isLoading}
				/>
			</div>
		</Layout>
	)
}

export default Movie
