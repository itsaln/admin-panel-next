export interface IUser {
	id: number
	name: string
	email: string
	avatarPath: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}
