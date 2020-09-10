import React from 'react'

class Tasks extends React.Component {
	render() {
		return this.props.tasks.map(e => <p key="id">{e.tittle} - {e.description}</p>)
	}
}


export default Tasks