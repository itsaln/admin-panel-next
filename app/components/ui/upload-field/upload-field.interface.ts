import { Dispatch, SetStateAction } from 'react'

export interface IUploadField {
	title?: string
	onChange: (...event: any) => void
	folder?: string
	setValue?: (val: number) => void
	setIsChosen?: Dispatch<SetStateAction<boolean>>
}
