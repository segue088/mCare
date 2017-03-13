import React, { Component } from 'react'
import { Footer, Group, ListItem } from './'
import { APIManager } from '../utils'

class SideContent extends Component {

	constructor(){
		super()

		this.state = {
	    	groups: []
	    }

	}

	componentDidMount(){  
    	APIManager.get('http://localhost:3000/api/provider?user=58c645ec417b86fb2d3832a3', null, (err, res) => {
	      if(err){
	        console.log(err)
	        return
	      }

	      	console.log(res)
	      	console.log(res.message[0].groups)
	      	// const fetchedgroups = res.message[0].groups
	     	this.setState({groups: res.message[0].groups})

	    })

	    

  	}


	render(){

		console.log(this.state.groups)
		const groupList = this.state.groups.map( (group, index) => {
			return <Group key= {index} />
		})

		return(
			
			<div id = "sidecontent">

					<section id="intro">
						<header>
							<p>Groups</p>
						</header>
					</section>

					<section>
						<div className="mini-posts">
								
								{ groupList }
								
						</div>
					</section>

					{/*<section>
						<ul className="posts">									
							
							<ListItem />
							
						</ul>
					</section>*/}

					
					{/*<Footer />*/}
			</div>

		)
	}
}

export default SideContent