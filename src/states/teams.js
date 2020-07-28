import { useRequest } from 'hooks/'
import { useRef, useState } from 'react'

export function useTeams(limit = 5) {
	const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams`
	const pageRef = useRef(1)

	const [query, setQuery] = useState(`${baseUrl}?page=1&limit=${limit}`)

	let response = useRequest(query)

	if (response?.data) {
		const {
			sports: [baseball],
		} = response.data

		const [leagues] = baseball.leagues

		response = { ...response, data: leagues.teams }
	}

	const handlePageChange = (page) => {
		if (page !== query.activePage) {
			pageRef.current = page
			setQuery(`${baseUrl}?page=${pageRef.current}&limit=${limit}`)
		}
	}

	return { ...response, activePage: pageRef.current, handlePageChange }
}
