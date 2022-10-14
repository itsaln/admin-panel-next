import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { IReviews } from '@/screens/movie/reviews/reviews.interface'
// import Loader from '@/ui/Loader'
import AddReviewForm from '@/screens/movie/reviews/add-review-form/AddReviewForm'
import ReviewItem from '@/screens/movie/reviews/ReviewItem'
import styles from './Reviews.module.scss'

const Reviews: FC<IReviews> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth()

	return (
		<>
			<div>
				{user && <AddReviewForm movieId={movieId} />}
			</div>
			{isLoading ? (
				// <Loader count={4} />
				<p>loading...</p>
			) : reviews?.length ? (
				<>
					<div className={styles.grid}>
						{reviews.map(review => (
							<ReviewItem review={review} key={review.id} />
						))}
					</div>
				</>
			) : (
				<p>Reviews not found!</p>
			)}
		</>
	)
}

export default Reviews
