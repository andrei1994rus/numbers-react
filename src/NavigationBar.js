import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

import styled from 'styled-components';

const Styles=styled.header
`
  diplay:flex;
  flex-direction:row;
  font-size:20px;
  align-items:center;
`;

class NavigationBar extends React.Component
{
  render()
  {
    return(
          <div>
              <Container fluid="true">
                    <Styles>
                      <NavBar expand="sm" bg="dark" variant="dark">
                          <NavBar.Brand className="brand">Numbers on React</NavBar.Brand>
                          <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
                          <NavBar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                      <LinkContainer exact to="/">
                                          <Nav.Link>Home</Nav.Link>
                                      </LinkContainer>
                                      <LinkContainer to="/find_factorial">
                                          <Nav.Link>Factorial</Nav.Link>
                                      </LinkContainer>
                                      <LinkContainer to="/random">
                                          <Nav.Link>Random</Nav.Link>
                                      </LinkContainer>
                                </Nav>
                          </NavBar.Collapse>
                      </NavBar>
                    </Styles>
              </Container>  
          </div>   
    );
  }
  
}

export default NavigationBar;
