import logotype from 'assets/img/logo.png'
import SignUpForm from 'components/create_user'
import LoginForm from 'components/login_form'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './login.css'
function Login() {
	return (
		<div className='login-container-wrapper'>
			<div className='login-container'>
				<img src={logotype} alt='logotipo' className='logo' />
				<Router>
					<Switch>
						<Route exact path='/login'>
							<LoginForm />
						</Route>
						<Route path='/usuario/crear'>
							<SignUpForm />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	)
}

export default Login
