import axios from 'axios'
import Cookies from 'js-cookie'

import { getContentType } from '@/api/api.helpers'

import { API_SERVER_URL, API_URL } from '@/config/api.config'
import { IS_PRODUCTION } from '@/config/constants'

export const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType()
})

const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export default instance
