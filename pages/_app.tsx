import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

import AuthProvider from '../app/provider/auth-provider/AuthProvider'
import { ThemeProvider } from '../app/provider/theme-provider/ThemeProvider'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ThemeProvider>
					<Component {...pageProps} />
				</ThemeProvider>
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
