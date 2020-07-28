import { addDays, isSunday, isThursday } from 'date-fns'
import { shuffle } from 'underscore'
export function generateMatches(teams, season) {
	let gameDate = new Date()

	const matches = teams.reduce((acc, value, index) => {
		return acc.concat(
			teams.slice(index + 1).map((nextValue) => {
				let match = null

				if (isSunday(gameDate) || isThursday(gameDate)) {
					gameDate = addDays(gameDate, 1)
				}

				match = {
					finished: false,
					teams: [
						{ ...value, races: 0, homeRun: 0 },
						{ ...nextValue, races: 0, homeRun: 0 },
					],
					gameDate,
					season,
				}

				gameDate = addDays(gameDate, 1)

				return match
			})
		)
	}, [])
	return shuffle(matches)
}
