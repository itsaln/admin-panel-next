import { IconType } from 'react-icons'

export interface IStatisticItem {
	name: string
	value: number
	Icon: IconType
	color: 'blue' | 'light-blue' | 'purple' | 'green'
}
