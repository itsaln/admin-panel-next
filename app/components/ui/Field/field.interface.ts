import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
