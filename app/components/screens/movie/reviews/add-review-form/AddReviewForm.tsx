import { useQueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/all'

import Field from '@/ui/field/Field'

import { IReviewDto } from '@/shared/interfaces/review.interface'

import { ReviewService } from '@/services/review.service'

import styles from './AddReviewForm.module.scss'

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IReviewDto>({ mode: 'onChange' })

	const queryClient = useQueryClient()

	const { mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.create({ ...data, movieId }),
		{
			async onSuccess() {
				reset()
				await queryClient.invalidateQueries(['get movie', movieId.toString()])
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewDto> = async data => {
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
