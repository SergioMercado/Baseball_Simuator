import ResultList from 'components/result/result'
import React from 'react'
import './results.css'
export default function Result() {
	return (
		<div className='result'>
			<h1 className='result__title'>
				Calendario de <span className='result__title-marked'>Resultados</span>
			</h1>
			<ResultList />
		</div>
	)
}
