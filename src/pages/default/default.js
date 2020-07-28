import React from 'react'
import { Footer, Header } from 'shared/components/'

export default function DefaultPage({ children }) {
	return (
		<>
			<Header />
			<div className='content'>{children}</div>
			<Footer />
		</>
	)
}
