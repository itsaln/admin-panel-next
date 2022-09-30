import { forwardRef } from 'react'
import { IField } from '@/ui/Field/field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input ref={ref as any} type={type} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
