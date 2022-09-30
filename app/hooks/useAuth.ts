import { useContext } from 'react'
import { AuthContext } from '../provider/auth-provider/AuthProvider'

export const useAuth = () => useContext(AuthContext)
