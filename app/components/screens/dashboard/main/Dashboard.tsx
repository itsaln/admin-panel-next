import { FC } from 'react'

import MainStatistics from '@/screens/dashboard/main/MainStatistics'
import MiddleStatistics from '@/screens/dashboard/main/middle-statistics/MiddleStatistics'

import Layout from '@/ui/Layout/Layout'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard | itsaln'>
			<MainStatistics />
			<MiddleStatistics />
		</Layout>
	)
}

export default Dashboard
