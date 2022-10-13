import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IReviewDto } from '@/shared/interfaces/review.interface'
import { useMutation } from '@tanstack/react-query'
import { ReviewService } from '@/services/review.service'
import Field from '@/ui/Field/Field'
import { MdSend } from 'react-icons/all'
import styles from './AddReviewForm.module.scss'
import { queryClient } from '../../../../../../pages/_app'

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IReviewDto>({ mode: 'onChange' })

	const { mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.createReview({ ...data, movieId }),
		{
			async onSuccess() {
				reset()
				await queryClient.invalidateQueries(['get movie', movieId])
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewDto> = async (data) => {
		await mutateAsync(data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.description}>
				<Field
					{...register('description', {
						required: 'Message is required'
					})}
					placeholder='Add a public review'
					error={errors.description}
				/>

				<button className={styles.button}>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddReviewForm
