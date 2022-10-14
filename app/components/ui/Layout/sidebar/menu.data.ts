import { IconType } from 'react-icons'
import { RiDashboard2Line, RiFileList3Line, RiListUnordered, RiMovie2Line } from 'react-icons/ri'

export interface IMenuItem {
	link: string
	Icon: IconType
}

export const menu: IMenuItem[] = [
	{
		link: '/dashboard',
		Icon: RiDashboard2Line,
	},
	{
		link: '/manage/movies',
		Icon: RiMovie2Line,
	},
	{
		link: '/manage/reviews',
		Icon: RiListUnordered,
	},
	{
		link: '/manage/invoices',
		Icon: RiFileList3Line,
	}
]
