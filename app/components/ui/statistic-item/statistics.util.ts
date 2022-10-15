import { IconType } from 'react-icons'
import { AiFillHome, AiOutlineEye, AiOutlineStar, AiOutlineTeam, AiOutlineVideoCamera } from 'react-icons/ai'

export const getIcon = (id: number): IconType => {
	switch (id) {
		case 1:
			return AiOutlineEye
		case 2:
			return AiOutlineTeam
		case 3:
			return AiOutlineVideoCamera
		case 4:
			return AiOutlineStar
		default:
			return AiFillHome
	}
}
