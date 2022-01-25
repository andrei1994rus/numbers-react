import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import numbersImage from '../img/numbersImage.jpg';

import styled from 'styled-components';

const Styles=styled.div
`
	.jumbo-class
	{
		background:url(${numbersImage});
		height:18vmax;
	}

	.jumbo-text
	{
		display:flex;
		flex-direction:column;
  		align-items:center;
		color:red;
		font-weight:900;
		font-size:7vh;
	}
`;

class Jumbo extends Component
{
	render=()=>
	(
		<Styles>
			<Jumbotron className="jumbo-class" fluid>
				<div className="jumbo-text">
					Welcome!
				</div>	
			</Jumbotron>
		</Styles>		
	)
}

export default Jumbo;
