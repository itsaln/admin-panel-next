import type { AppProps } from 'next/app'
import AuthProvider from '../app/provider/auth-provider/AuthProvider'

import '@/assets/styles/tailwind.scss'
import '@/assets/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default MyApp
