import { useContext } from 'react'

import { ThemeContext } from '../provider/theme-provider/ThemeProvider'

export const useTheme = () => useContext(ThemeContext)
