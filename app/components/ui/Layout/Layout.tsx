import { FC, PropsWithChildren } from 'react'

import Header from '@/ui/Layout/header/Header'

import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
