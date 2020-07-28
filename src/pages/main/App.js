import DefaultPage from 'pages/default/default'
import Home from 'pages/home/home'
import Login from 'pages/login/login'
import Positions from 'pages/positions/positions'
import Result from 'pages/results/results'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<DefaultPage>
						<Home />
					</DefaultPage>
				</Route>
				<Route exact path='/resultados/'>
					<DefaultPage>
						<Result />
					</DefaultPage>
				</Route>
				<Route exact path='/posiciones/'>
					<DefaultPage>
						<Positions />
					</DefaultPage>
				</Route>
				<Route exact path='/login/'>
					<Login />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
