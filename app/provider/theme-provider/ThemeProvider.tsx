import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { IThemeContext } from './theme.interface'

export const ThemeContext = createContext({} as IThemeContext)

const getCurrentTheme = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches

const addDarkClass = (isDark: boolean) => {
	if (isDark) document.documentElement.classList.add('dark')
	else document.documentElement.classList.remove('dark')
}

export const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

	useEffect(() => {
		const ls = localStorage.getItem('darkTheme')

		setIsDarkTheme(ls ? Boolean(ls) : getCurrentTheme())
		addDarkClass(ls ? Boolean(ls) : getCurrentTheme())
	}, [])

	const toggleDark = () => {
		const isDark = !isDarkTheme

		localStorage.setItem('darkTheme', isDark.toString())
		setIsDarkTheme(isDark)

		addDarkClass(isDark)
	}

	return (
		<ThemeContext.Provider
			value={{
				isDarkTheme,
				toggleDark
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
