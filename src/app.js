import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Menu,  SideContent, MainContent, Content } from './components'


class App extends Component {

	render(){
		return(
			  
			<div>

				<Menu />

				<Content />
					
			</div>

		)
	}

}

ReactDOM.render(<App />, document.getElementById('root') )