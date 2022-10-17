export interface ITableItem {
	id: number
	name: string
	image?: string
	viewLink: string
	editLink: string
	removeHandler: () => void
}
