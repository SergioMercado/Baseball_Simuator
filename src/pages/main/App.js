import Home from 'pages/home/home'
import Login from 'pages/login/login'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
