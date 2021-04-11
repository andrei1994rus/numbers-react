import React,{Component} from 'react';
import {Alert} from 'react-bootstrap';

class AlertMessage extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			message:undefined
		}
	}

	componentDidMount()
	{
		console.log("componentDidMount");
		this.setState(
		{
			message:this.props.message
		});
	}

	componentWillUpdate(nextProps,nextState)
	{
		console.group("componentWillUpdate");
		if(nextProps.message!==nextState.message)
		{
			console.log("nextProps.message!==nextState.message");
			this.setState(
			{
				message:this.props.message
			});
		}
		
		else if(nextProps.message===nextState.message)
		{
			console.log("nextProps.message===nextState.message");
		}
		console.groupEnd();
	}

	render()
	{
		return(
			<div>
				<Alert variant="danger">
					{this.state.message}
				</Alert>
			</div>
		);
	}
}


export default AlertMessage;