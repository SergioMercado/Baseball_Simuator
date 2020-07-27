import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'pages/main/App'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.unregister()
