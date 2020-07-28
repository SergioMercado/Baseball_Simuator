// import InputDatepicker from 'components/datepicker/datepicker'
import moment from 'moment'
import 'moment/locale/es'
import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	UncontrolledTooltip,
} from 'reactstrap'
import { firestore } from 'shared/utils/firebase'
import { v4 as uniqueKey } from 'uuid'
import './result.css'

moment.locale('es')

function formatterDate(date) {
	const matchDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000)
	return moment(matchDate).format('LLL')
}
function ResultItem({ isFavorite, teams, gameDate, finished }) {
	const matchDate = formatterDate(gameDate)

	return (
		<Card className='teams'>
			<CardHeader className='teams__header'>
				<span className='teams__header--date'>{matchDate} CO</span>
				{/* {finished && <span className='teams__header--status'>Terminado</span>} */}
			</CardHeader>
			<CardBody>
				<div>
					{teams.map(({ team, races }) => (
						<figure className='teams__figure' key={uniqueKey()}>
							<img
								className='teams__image'
								src={team.logos[0].href}
								alt='team 1'
							/>
							<span className='teams__figure--name'>
								{team.shortDisplayName}{' '}
								<span className='teams__figure--score'>{races}</span>
							</span>
						</figure>
					))}
				</div>
			</CardBody>
			<CardFooter className='bg-white teams__preview'>
				{isFavorite ? (
					<FaStar size={25} id='star' className='teams__preview--start' />
				) : (
					<FaRegStar size={25} id='star' className='teams__preview--start' />
				)}

				<UncontrolledTooltip placement='right' target='star'>
					Agregar a mis partidos
				</UncontrolledTooltip>
			</CardFooter>
		</Card>
	)
}
export default function ResultList() {
	const [data, setData] = useState(null)
	useEffect(() => {
		const unsubscribe = firestore
			.collection('matches')
			.orderBy('gameDate')
			.onSnapshot((querySnapshot) => {
				const data = []

				querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
				setData(data)
			})

		return () => unsubscribe()
	}, [])

	useEffect(() => {
		if (data) {
			const matchRef = firestore.collection('matches')
			data.forEach((match) => {
				const { teams, id } = match
				let timer = null

				if (!match.finished) {
					Array(10)
						.fill(0)
						.forEach(() => {
							const random = Math.floor(Math.random() * 2)

							const races = teams[random].races
							const homeRun = teams[random].homeRun

							teams[random].races = races + 1
							teams[random].homeRun = races % 2 === 0 ? homeRun + 1 : homeRun

							timer = setTimeout(async () => {
								matchRef.doc(id).update(match)
							}, 10000)
						})

					matchRef.doc(id).update({ finished: true })
					return
				} else {
					clearTimeout(timer)
				}
			})
		}
	})

	if (!data) {
		return (
			<div className='row'>
				{Array(10)
					.fill(0)
					.map(() => (
						<div className='col-lg-3 col-xs-12 mb-3' key={uniqueKey()}>
							<Skeleton height={300} />
						</div>
					))}
			</div>
		)
	}

	return (
		<>
			{/* <div className='mb-3'>
				<InputDatepicker />
			</div> */}
			<div className='row'>
				{data.map((match) => (
					<div className='col-lg-3 col-xs-12 mb-3' key={uniqueKey()}>
						{<ResultItem {...match} />}
					</div>
				))}
			</div>
		</>
	)
}
