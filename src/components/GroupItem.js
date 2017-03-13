import React, { Component } from 'react'

class GroupItem extends Component {
	render(){
		return(
			<article className="mini-post">
				<header>
					<h3><a href="#">Vitae sed condimentum</a></h3>
					<time className="published" datetime="2015-10-20">October 20, 2015</time>
					<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
				</header>
				{/*<a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>*/}
			</article>
		
		)
	}
}

export default GroupItem