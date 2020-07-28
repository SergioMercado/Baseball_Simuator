import '@trendmicro/react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import React from 'react'
import Dropdown from '@trendmicro/react-dropdown'
import DatePicker, { DateInput } from '@trendmicro/react-datepicker'
import '@trendmicro/react-dropdown/dist/react-dropdown.css'
export default function InputDatepicker() {
	return (
		<Dropdown>
			<Dropdown.Toggle
				btnStyle='link'
				noCaret
				style={{ padding: 0, border: 1, backgroundColor: 'white' }}
			>
				<DateInput
					value={moment().format('YYYY-MM-DD')}
					onChange={(value) => {
						console.log(value)
						// this.setState((state) => ({ date: value }))
					}}
				/>
			</Dropdown.Toggle>
			<Dropdown.Menu style={{ padding: 8 }}>
				<DatePicker
					date={moment().format('YYYY-MM-DD')}
					onSelect={(date) => {
						console.log(date)
						// this.setState((state) => ({ date: date }))
					}}
				/>
			</Dropdown.Menu>
		</Dropdown>
	)
}
