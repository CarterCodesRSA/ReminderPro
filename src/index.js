import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Reducers'
import './index.css'

const store = createStore(reducer)
console.log(store)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
