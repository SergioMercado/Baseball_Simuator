import { useRequest } from 'hooks/'
import React, { useState } from 'react'
import Pagination from 'react-js-pagination'
import { Table } from 'reactstrap'
import { Footer, Header } from 'shared/components/'
import './home.css'

function useTeams() {
	const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams`

	const [query, setQuery] = useState({
		url: `${baseUrl}?page=1&limit=10`,
		activePage: 1,
	})

	const data = useRequest(query.url)

	const handlePageChange = (page) => {
		if (page !== query.activePage) {
			setQuery({ url: `${baseUrl}?page=${page}&limit=10`, activePage: page })
		}
	}

	return { ...data, activePage: query.activePage, handlePageChange }
}
export default function Home() {
	const { data, isLoading, activePage, handlePageChange } = useTeams()

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div className='home-container'>
			<Header />
			<div className='content container my-5'>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Logo</th>
							<th>Nombre Corto</th>
							<th>Nombre Largo</th>
							<th>Abreviación</th>
							<th>Localización</th>
						</tr>
					</thead>
					<tbody>
						{data.sports[0].leagues[0].teams.map(({ team }, index) => (
							<tr key={team.uid}>
								<th scope='row'>{index + 1}</th>
								<td>
									<img
										width='100px'
										src={team.logos[0].href}
										alt={team.displayName}
									/>
								</td>
								<td>{team.shortDisplayName}</td>
								<td>{team.displayName}</td>
								<td>{team.abbreviation}</td>
								<td>{team.location}</td>
							</tr>
						))}
					</tbody>
				</Table>

				<div className='d-flex justify-content-center'>
					<Pagination
						itemClass='page-item'
						linkClass='page-link'
						prevPageText='Prev'
						nextPageText='Next'
						firstPageText='First'
						lastPageText='Last'
						activePage={activePage}
						itemsCountPerPage={10}
						totalItemsCount={30}
						onChange={handlePageChange}
					/>
				</div>
			</div>

			<Footer />
		</div>
	)
}
