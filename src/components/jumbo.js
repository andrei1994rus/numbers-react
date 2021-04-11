import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import numbersImage from '../img/numbersImage.jpg';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const Styles=styled.div
`
	.jumbo-class
	{
		background:url(${numbersImage});
		height:150px;
	}

	.jumbo-text
	{
		display:flex;
		flex-direction:column;
  		align-items:center;
		color:red;
	}
`;

class Jumbo extends Component
{
	render()
	{
		return(
			<Styles>
				<Jumbotron className="jumbo-class" fluid>
					<div className="jumbo-text">
						<Typography variant="h4">
							Welcome to our site!
						</Typography>
					</div>	
				</Jumbotron>
			</Styles>		
		);
	}
}

export default Jumbo;
