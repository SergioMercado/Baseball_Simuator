import React from 'react'
// import Pagination from 'react-js-pagination'
import Skeleton from 'react-loading-skeleton'
import { Table } from 'reactstrap'
import { useGenerateMatches } from 'states/generate_matches'
import { useTeams } from 'states/teams'

function TeamListItem({ team, index }) {
	return (
		<tr className='home__table--row'>
			<th scope='row'>{index + 1}</th>
			<td>
				<img width='100px' src={team.logos[0].href} alt={team.displayName} />
			</td>
			<td>{team.shortDisplayName}</td>
			<td>{team.displayName}</td>
			<td>{team.abbreviation}</td>
			<td>{team.location}</td>
		</tr>
	)
}

export default function TeamList() {
	const { data, isLoading } = useTeams()

	useGenerateMatches(data)

	if (isLoading) {
		return (
			<section className='content container my-5'>
				<Skeleton height={50} />
				<Skeleton count={5} height={100} />
			</section>
		)
	}

	return (
		<section className='content container home'>
			<h1 className='home__title'>
				Mejores equipos del <span className='home__title--marked'>2020</span>{' '}
			</h1>
			<Table responsive>
				<thead className='text-white' style={{ backgroundColor: '#041e42' }}>
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
					{data.map(({ team }, index) => (
						<TeamListItem key={team.uid} team={team} index={index} />
					))}
				</tbody>
			</Table>
		</section>
	)
}
