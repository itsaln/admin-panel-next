import { FC } from 'react'
import Layout from '@/ui/layout/Layout'
import MainStatistics from '@/screens/dashboard/main-statistics/MainStatistics'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard | itsaln'>
			<MainStatistics />
		</Layout>
	)
}

export default Dashboard
