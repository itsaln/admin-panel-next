import { forwardRef } from 'react'

import { ITextArea } from '@/ui/text-area/text-area.interface'

import styles from './TextArea.module.scss'

const TextArea = forwardRef<HTMLAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={styles['editor']} style={style}>
				<textarea ref={ref as any} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'

export default TextArea
