import { useRedirect } from 'hooks'
import React from 'react'
export default function SignUpForm() {
	const { redirect } = useRedirect('/login')

	return (
		<>
			<h2 className='title'>Crear usuario</h2>
			<form action='' className='form'>
				<input type='text' placeholder='Nombre' />
				<input type='email' placeholder='Correo Electrónico' />
				<button type='button' className='create-user' onClick={redirect}>
					Regresar a login
				</button>
				<button type='button' className='login'>
					Crear
				</button>
			</form>
		</>
	)
}
