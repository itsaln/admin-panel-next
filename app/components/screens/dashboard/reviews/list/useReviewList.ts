import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { ReviewService } from '@/services/review.service'

export const useReviewList = () => {
	const { data: response, isLoading } = useQuery(['get all reviews'], () =>
		ReviewService.findAll()
	)
	const queryClient = useQueryClient()
	const { mutate } = useMutation(
		['remove review'],
		(id: number) => ReviewService.remove(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all reviews'])
			}
		}
	)

	return {
		response,
		isLoading,
		mutate
	}
}
