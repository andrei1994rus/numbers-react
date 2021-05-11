import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

const Styles=styled.header
`
  diplay:flex;
  flex-direction:row;
  font-size:20px;
  align-items:center;

  .a 
  {
  	color:transparent;
  	text-decoration:none;
  }

  .list_navbar
  {
  	display:flex;
    flex-wrap:wrap;
    margin:0;
    padding:0;
    list-style-type:none;
  }

  .list_navbar a
  {
  	text-decoration:none;
  	color:hsla(0,0%,100%,.5);
  	margin-left:10px;
  }

  .list_navbar a[class~="active"]
  {
  	color:white;
  	text-decoration:none;
  }
`;

class NavigationBar extends React.Component
{
	render=()=>
	(
        <div>
            <Container fluid="true">
                <Styles>
                    <NavBar expand="sm" bg="dark" variant="dark">
                        <NavBar.Brand className="brand">Numbers on React</NavBar.Brand>
                        <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
                        <NavBar.Collapse id="responsive-navbar-nav">
                            <ul className="list_navbar">
                                    <li>
                                        <NavLink exact to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/find_factorial">Factorial</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/random">Random</NavLink>
                                    </li>
                                </ul>
                        </NavBar.Collapse>
                    </NavBar>
                </Styles>
            </Container>  
        </div>   
    )
  
}

export default NavigationBar;
