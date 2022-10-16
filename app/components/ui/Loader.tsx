import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader: FC<SkeletonProps> = (props) => {
	return <Skeleton baseColor='#f1f5fe' highlightColor='#e8edfb' {...props} />
}

export default Loader
