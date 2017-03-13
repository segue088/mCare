import React, { Component } from 'react'

class TopMenu extends Component {
	render(){
		return(
			
			<header id="header">
				<h1><a href="#">Future Perfect</a></h1>
				<nav className="links">
					
				</nav>
				<nav className="main">
					<ul>
						<li className="calendar">
							<a className="fa-calendar" href="#">Appiontments</a>
						</li>
						<li className="alert">
							<a className="fa-envelope" href="#">Messages</a>
						</li>
						<li className="search">
							<a className="fa-search" href="#search">Search</a>
							<form id="search" method="get" action="#">
								<input type="text" name="query" placeholder="Search" />
							</form>
						</li>
						<li className="menu">
							<a className="fa-bars" href="#menu">Menu</a>
						</li>
					</ul>
				</nav>
			</header>

		)
	}
}

export default TopMenu