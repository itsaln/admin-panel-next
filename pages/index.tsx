import type { GetStaticProps, NextPage } from 'next'
import { MovieService } from '@/services/movie.service'
import { IHome } from '@/screens/home/home.interface'
import Home from '@/screens/home/Home'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

// @ts-ignore
export const getStaticProps: GetStaticProps<IHome> = async () => {
	try {
		const { data: newMovies } = await MovieService.getAll()

		return {
			props: {
				newMovies
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				newVideos: []
			}
		}
	}
}

export default HomePage
