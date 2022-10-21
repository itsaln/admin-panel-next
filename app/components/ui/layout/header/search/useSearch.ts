import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search movies', debounceSearch],
		() => MovieService.findAll(debounceSearch),
		{
			select: ({ data }) => data.slice(0, 4),
			enabled: !!debounceSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return {
		handleSearch,
		isSuccess,
		data,
		searchTerm
	}
}
