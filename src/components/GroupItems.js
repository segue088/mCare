import React, { Component } from 'react'
import { GroupItem } from './'
import { APIManager } from '../utils'

class GroupItems extends Component {

	constructor(){
		super()

		// this.state = {
	 //    	groups: []
	 //    }

	}

	componentDidMount(){  
    	// APIManager.get('http://localhost:3000/api/provider?user=58c645ec417b86fb2d3832a3', null, (err, res) => {
	    //   if(err){
	    //     console.log(err)
	    //     return
	    //   }

	    //   	console.log(res)
	    //   	console.log(res.message[0].groups)
	    //   	// const fetchedgroups = res.message[0].groups
	    //  	this.setState({groups: res.message[0].groups})

	    // })

	    

  	}

  	render(){

  // 		console.log(this.state.groups)
		// const groupList = this.state.groups.map( (group, index) => {
		// 	return <GroupItem key= {index} />
		// })


		return(
			<section >
				<section id="intro">
					<header>
						<p>Groups</p>
					</header>
				</section>

				<section>
					
						<GroupItem  />
						<GroupItem  />
						<GroupItem  />
						<GroupItem  />
						<GroupItem  />
						<GroupItem  />
						<GroupItem  />
						<GroupItem  />
						
				
				</section>
			</section>

		)
	}
}

export default GroupItems