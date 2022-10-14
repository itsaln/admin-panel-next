import { FC } from 'react'
import Layout from '@/ui/layout/Layout'
import Heading from '@/ui/heading/Heading'
import styles from './Dashboard.module.scss'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard | itsaln'>
			<Heading>Main Statistics</Heading>
		</Layout>
	)
}

export default Dashboard
