import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { IReview } from '@/shared/interfaces/review.interface'
import AddReviewForm from '@/screens/movie/reviews/add-review-form/AddReviewForm'

// TODO: create interface
const Reviews: FC<{ movieId: number, reviews: IReview, refetch: any }> = ({ movieId, reviews, refetch}) => {
	const { user } = useAuth()

	return (
		<>
			<div>
				{user && <AddReviewForm movieId={movieId} refetch={refetch} />}
			</div>
			{/*{isLoading ? (*/}
			{/*	<Loader count={4} />*/}
			{/*) : data?.length ? (*/}
			{/*	<>*/}
			{/*		<div className={styles.grid}>*/}
			{/*			{data.map(comment => (*/}
			{/*				<CommentItem comment={comment} key={comment._id} />*/}
			{/*			))}*/}
			{/*		</div>*/}
			{/*	</>*/}
			{/*) : (*/}
			{/*	<p>Comments not found</p>*/}
			{/*)}*/}
		</>
	)
}

export default Reviews
