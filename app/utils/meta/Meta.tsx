import Head from 'next/head'
import { FC } from 'react'

import { IMeta } from '@/utils/meta/meta.interface'

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
				{description ? (
					<meta
						itemProp='description'
						name='description'
						content={description}
					/>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
		</>
	)
}

export default Meta
