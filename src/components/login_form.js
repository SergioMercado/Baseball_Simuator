import { useRedirect } from 'hooks'
import React from 'react'
export default function LoginForm() {
	const { redirect } = useRedirect('/usuario/crear')

	return (
		<>
			<h2 className='title'>Welcome</h2>
			<form action='' className='form' method='post'>
				<input type='text' placeholder='Nombre' />
				<input type='email' placeholder='Correo Electrónico' />
				<button type='button' className='create-user' onClick={redirect}>
					Crear usuario
				</button>
				<button type='submit' className='login'>
					Iniciar sesión
				</button>
			</form>
		</>
	)
}
