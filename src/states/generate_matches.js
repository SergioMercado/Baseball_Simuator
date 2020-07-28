import { useEffect } from 'react'
import { firestore } from 'shared/utils/firebase'
import { generateMatches } from 'shared/utils/generate_matches'

export function useGenerateMatches(teams) {
	useEffect(() => {
		if (teams) {
			async function saveSeason() {
				const seasonRef = firestore.collection('seasons')
				const matchesRef = firestore.collection('matches')

				seasonRef
					.where('isActive', '==', true)
					.get()
					.then(async (snapshot) => {
						if (snapshot.size) {
							return
						} else {
							const seasonSaved = await seasonRef.add({
								season: 'Primavera',
								isActive: true,
							})

							generateMatches(teams, {
								...(await seasonSaved.get()).data(),
								id: seasonSaved,
							}).forEach(async (match) => await matchesRef.add(match))
						}
					})
			}

			saveSeason()
		}
	}, [teams])
}
