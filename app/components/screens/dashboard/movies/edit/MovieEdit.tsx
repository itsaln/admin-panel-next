import { FC } from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'

import { useMovieEdit } from '@/screens/dashboard/movies/edit/useMovieEdit'

import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'
import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import UploadField from '@/ui/upload-field/UploadField'

import { IMovieDto } from '@/shared/interfaces/movie.interfaces'

import { IMediaResponse } from '@/services/media.service'

const MovieEdit: FC = () => {
	const { mutate, isLoading, handleSubmit, register, errors, control } =
		useMovieEdit()

	const onSubmit: SubmitHandler<IMovieDto> = (data) => {
		mutate(data)
	}

	return (
		<Layout title='Movie edit'>
			<Heading>Movie edit</Heading>

			{isLoading ? (
				<Loader count={4} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className='w-1/3'>
					<Field
						{...register('name', {
							required: 'Name is required'
						})}
						type='text'
						placeholder='Name'
						error={errors.name}
					/>
					<Field
						{...register('fees', {
							required: 'Fees is required'
						})}
						type='number'
						placeholder='Fees ($)'
						error={errors.fees}
					/>
					<div className='mt-8 mb-4'>
						<Controller
							name='poster'
							control={control}
							render={({ field: { onChange, value } }) => (
								<UploadField
									folder='posters'
									onChange={(value: IMediaResponse) => {
										onChange(value.url)
									}}
									value={value}
								/>
							)}
						/>
					</div>

					<Button>Save</Button>
				</form>
			)}
		</Layout>
	)
}

export default MovieEdit
