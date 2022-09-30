import { IUser } from '@/shared/interfaces/user.interfaces'
import { Dispatch, SetStateAction } from 'react'

export type TypeUserState = IUser | null

export interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}
