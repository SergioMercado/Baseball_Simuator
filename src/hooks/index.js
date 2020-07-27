import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useSWR from 'swr'
export function useRedirect(path = '/') {
	const history = useHistory()

	const handleRedirect = () => {
		history.push(path)
	}

	return { redirect: handleRedirect }
}

export function useToggle(value = false) {
	const [isOpen, setIsOpen] = useState(value)

	const setToggle = () => setIsOpen(!isOpen)

	return [isOpen, setToggle]
}

const fetcher = async (path) => {
	const { data } = await axios.get(path)
	return data
}
export function useRequest(path) {
	if (!path) {
		throw new Error('Path is required')
	}

	const { data, error, mutate } = useSWR(path, fetcher)

	const isLoading = !data && !error

	return { data, isLoading, error, isLoading, mutate }
}
