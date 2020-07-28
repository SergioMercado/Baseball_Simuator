import React from 'react'
import { Table } from 'reactstrap'
import './positions.css'

export default function Positions() {
	return (
		<div className='container positions'>
			<h1 className='positions__title'>
				Posiciones <span className='positions__title-marked'> I temporada</span>
			</h1>
			<section>
				<Table responsive striped>
					<thead>
						<tr className='text-white positions__header'>
							<th>Equipo</th>
							<th>Ganados</th>
							<th>Perdidos</th>
							<th>Anotadas</th>
							<th>Homerun</th>
						</tr>
					</thead>
					<tbody>
						<tr className='positions__rows'>
							<td>
								<figure className='positions__figure'>
									<img
										className='positions__image'
										src='https://a.espncdn.com/i/teamlogos/mlb/500/bal.png'
										alt='team 1'
									/>
									<span className='positions__figure--name'>Orioles</span>
								</figure>
							</td>
							<td>8</td>
							<td>2</td>
							<td>48</td>
							<td>10</td>
						</tr>
						<tr className='positions__rows'>
							<td>
								<figure className='positions__figure'>
									<img
										className='positions__image'
										src='https://a.espncdn.com/i/teamlogos/mlb/500/laa.png'
										alt='team 1'
									/>
									<span className='positions__figure--name'>Red Sox</span>
								</figure>
							</td>
							<td>5</td>
							<td>5</td>
							<td>28</td>
							<td>4</td>
						</tr>
						<tr className='positions__rows'>
							<td>
								<figure className='positions__figure'>
									<img
										className='positions__image'
										src='https://a.espncdn.com/i/teamlogos/mlb/500/cle.png'
										alt='team 1'
									/>
									<span className='positions__figure--name'>Angels</span>
								</figure>
							</td>
							<td>5</td>
							<td>5</td>
							<td>18</td>
							<td>3</td>
						</tr>
						<tr className='positions__rows'>
							<td>
								<figure className='positions__figure'>
									<img
										className='positions__image'
										src='https://a.espncdn.com/i/teamlogos/mlb/500/chw.png'
										alt='team 1'
									/>
									<span className='positions__figure--name'>White Sox</span>
								</figure>
							</td>
							<td>3</td>
							<td>7</td>
							<td>8</td>
							<td>0</td>
						</tr>
						<tr className='positions__rows'>
							<td>
								<figure className='positions__figure'>
									<img
										className='positions__image'
										src='https://a.espncdn.com/i/teamlogos/mlb/500/bos.png'
										alt='team 1'
									/>
									<span className='positions__figure--name'>Red Sox</span>
								</figure>
							</td>
							<td>1</td>
							<td>9</td>
							<td>2</td>
							<td>0</td>
						</tr>
					</tbody>
				</Table>
			</section>
		</div>
	)
}
