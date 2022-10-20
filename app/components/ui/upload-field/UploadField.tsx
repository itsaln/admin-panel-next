import { FC } from 'react'

import { IUploadField } from '@/ui/upload-field/upload-field.interface'
import { useUploadFile } from '@/ui/upload-field/useUploadFile'

import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({
	onChange,
	folder,
	value
}) => {
	const { uploadFile } = useUploadFile(onChange, folder)

	return (
		<div className={styles.file}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			{value && <img
				width={70}
				height={70}
				className='rounded mb-2'
				src={value}
				alt=''
			/>}
			<label className='block'>
				<span className='sr-only'>Choose File</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
