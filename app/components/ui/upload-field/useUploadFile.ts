import { useMutation } from '@tanstack/react-query'
import { ChangeEvent } from 'react'

import { MediaService } from '@/services/media.service'

export const useUploadFile = (
	onChange: (...event: any) => void,
	folder?: string
) => {
	const { mutateAsync } = useMutation(
		['upload file'],
		(data: FormData) => MediaService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error: any) => {
				alert(
					error.response && error.response.data
						? typeof error.response.data.message === 'object'
							? error.response.data.message[0]
							: error.response.data.message
						: error.message
				)
			}
		}
	)

	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return

		const formData = new FormData()
		formData.append('media', files[0])

		await mutateAsync(formData)
	}

	return {
		uploadFile
	}
}
