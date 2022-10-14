import { FC } from 'react'
import cn from 'classnames'
import { IMovie } from '@/shared/interfaces/movie.interfaces'
import Link from 'next/link'
import Image from 'next/image'

import styles from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie, variant?: 'sm' | 'md' }> = ({ movie, variant = 'md' }) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<a className={cn(styles.item, {
				[styles.small]: variant === 'sm'
			})}>
				{movie.rating &&
				<div className={styles.rating}>
					{movie.rating}
				</div>
				}
				<div className={styles.poster}>
					{/*<Image*/}
					{/*	width={220}*/}
					{/*	height={330}*/}
					{/*	src={movie.poster}*/}
					{/*	alt={movie.name}*/}
					{/*	layout='responsive'*/}
					{/*/>*/}
					<img
						width={220}
						height={330}
						src='https://kinopoisk-ru.clstorage.net/Q1t7N0130/9350fcuy2S/E65bVCmmQw-dfwDBGDka03krdIh9xeRKC0kaRSvfbsT0Dki2T43ISoU0wG47L41voOWNdlHGaayZFgzwJ_Ux3lH-GVF2tFsHmCEcjRpmH4c2Zy3VOIusHE9UCRhwgEH03DxhxGmy4GqpVYErfDDSNv-lmCkBhGe03Vt-zT_FTIcDhE5eGoMYMbhIR9sSNCfSQ190mmSa5WEFNj1IItxX0vMIZNhDs_ppjHG-BF960D7-hKosLpZD28ViRdRs0GilCp1KWzK8GSCzVGXzAx0x7kp_U6Z6r-FJOA4ISwH2Ws7pL1nVb5fBaa1CsjdbSv8pxoejNS2RWPzoaE7hTcxjlz-3RVwKoBoDr0ll4QEjEv5TUHK8fKDEehg3GGk120fazARW0WiTxXy6X5Q7XHP9JtqAuhYBnHzK32tt_m3zRrY0lm1gMZQKM5Nvacw_Dy_VcG5rj1uny04QMzpDENpK4usbRfBBq8JgskymCmV24yX6o7o-I6ZYyupFRdVI326VDLdefD2lOiypRWXhFzEs-kVsdYlcrfB2PiELVQ_yetvLNEHyVYvdaaJ6pR9gUcgS3KmKHAGda9LiYWXWduVpqgqsalchoD0kgUF-1i8UH89sQVyrarnlfQ4tEEQm-lTGxSdOykqz7GGqUaIuQ3_xKsKCuSUxgEL2-lZT03jfdpk_p39kC7ABDbJCZd4MOSnbcXZRilup7kQ1LR14EelIyMo3QNVJmtxXmX2EK2dI6RP-nKM2Ar5G8d1lc-FpwEWxN6F1XjKeCAOLT2PoKhg232lVUKd_huRsJRcSVgLlcurrNEb6ZavCeopInClgd9Qq3KumNSCFatPHe1HhbdFXlwqVVV0elwU7tXlF7SsyLexXdFGKfYfnRgYcE2ER027d_x5Z6U263lmyVa4xSlDJPsOvojQcjkb87Fdt8Wf9eLAKiGtULrEAJrNIfdU-JDTOUG9ImFq-4XwpAhJoM8ZZwtA2QctlhM1rrmmMEU5VyjHjmoYTIIB67sd8ctxcxGyLLaVIZTOFHQCzZmzKATMP-29QYqRtqfZ3EDwbVTDdS-7IPnfOV4jab4JakhJaX-4V3ai_Nz2zRMv5fHXTTNB1uQOKS3McjwwQlVpJ8TMYLtlpVEmmQLDheh4qBVQQ-Hf_-DFZ-G-ozk-jWJwuR13yENmioDMksEfv-WF2wHrZe5QRiGd3MbYHL6p2Q8k6OBL7Uktgvn-NwW4MKxBFPPhV3esQWt5ki8pPhnqFLVhzyQ7osqQIGLxi-OZeeft17E6ZBrxYfxW_FziLZ1rrLS479WNyT4pdvftoBz4EYinJVd7zLWz-Z4nqfZZYrhdJTu0s97-jNBCgX9zdakP8ZvVuljWqWGQruxotnnhc8jICEttIUVu_YKHNXhw3Ok0p91Hg-BxgzWGJ6GqmXrooZ130Dtievj8PhFTb_2pz6H7ydJg2pGVwPIAnL61fVu09OhXzbkJDiEa4wFgbEiVWLehK4M0qb_Rjmchak0OiFUBz6SrpkoAuGr91yMllRPBm9leBC4tqWhG8Bxi2TVzXNy0d-ktEd5hEme9COzEhWi7cc-fJG0DUUZjMb65NtxJgcfo96ICpNQylZ8LDaUnKRfhmgyqOZnIpvikHvVZcyQwOMvByYX26fZ3PZR0xAkQA82Tv8wdC02-24UW4eZ0tcWjhHcePpzEhukf_yV1z1HnHerYCpkRyN4AcA6N1aPILHh__al9Aj0aQ0n4ZFDJkAPRS2O4pU8Jqpu5us2OhO2xH7yvhjKIzLpl80MNsQuFe11e6Br9ucB-RPTehXm_LFzYc8nZrS4llmc9pBzISWATaXN3tKGzXUIvjZbBRkjhYWtgz9aONMi-EevPfW0rcZ81Yqz29WGYwgQkUiV5a1xEQBPhvX3-fTZntQywNO0sWxG38-TVE2U6S7kuKeocRYXjaMNWgvh8RvEji9kF2yGrjTbcwundwH60KJrhKdvQ4JRLTVXJvpXuh5UUGJhpALeNJ78cvdcFjuMNetFyxLkdb_iXVpoACEbVI8uBsV8BV5m-HNaVmRQyUDAW8QFTJIA41wkBLV6hgsvN3MzcjahbGcdPzEHvaTKjeQIxRhApkc9wI_5K8MiOCXe3ja3fGU9VWiwG1e3oxrSkWn0lj0DUkKN9zfX23YKLXaTQCKFg1-VzJ7Altw1aF_UWnVr4RSVXzBsiaqjYahEnI3mJo22zBeLcwq0NbAaQCL7B6ResDHynabEtbqkys0HotNzxALtFx8dAHUPpUoe5lmEmkPUBdzzDmsIEOIJ1B3Od0d9hx0VemKKZsXgGCARCAfXnoEDANwkBtaJhcpc17FBMrTiPXbcHOD1TWSJDfa4F2hR1DW_YR24yjHguvZMr5W2PRTf1phguoTFsqgT0ym0B92jYaPfRvcl-3Sp_ObS8VOkAC_Xr9yi5R7myV0Wi6bKMSbX39M9KjqzMwtFn1-W1x1VrHbIUdgVV5Gr85DbJGd-4uGD_BaldApHOs6HoTETtjPdNW7f8vedhDmudChXG7NnFO7D3Tk4MFGYJa6-RpRNRaxUmKAJllQyifBzeAZGTsKxo971BcdbdNi8JaFCkmaAjyXebRCVv0UoHCZolrpS9bTO045by9HC28Q8_Wa0fATNlnhhe7d28rtgQ2skZ--iwwBtdlS2qLfq3OQg0HA2090kn47BZi_GyJ316NS5I7TE3ROdaOmCMFtG_K4kBA4GXaY4cGm11RA7gMDZ92W-0TNSTVaWxYjnqz53cxKgBCI91RzuU7TeNsttlZjGm-HUBo6TnXo7oQHLpr09pUVdxF31e-Pb5_dDeSPxG8RWXxEy028EtgQ49GgO5fOR0GVjX-Tv3-PlH1VbTOW5pCvBBtVsg2-IOBPD2jadf6ZFjBS85plyuGZVgOoxQuvGlL1hYgG-JIR0ije6zwbgkDB30HyFvg8wp52XKn2mKEd48QfXPxNNiOsBMQvnTy5Wg'
						alt={movie.name}
					/>
				</div>
				<div className={styles.heading}>
					{movie.name}
				</div>
			</a>
		</Link>
	)
}

export default MovieItem
