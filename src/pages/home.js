import React from 'react';

import {Typography} from '@material-ui/core';

import StylesPage from '../styledComponents/StylesPage';

import linkText from '../components/linkText';
import navItemText from '../components/navItemText';

import headerPage from '../components/headerPage';

const links=["/find_factorial","/random"];


class Home extends React.Component
{
	render=()=>
	(
		<StylesPage>
			<header>{headerPage("Home page.")}</header>
			<div className="div_text">
				<Typography variant="body1">
					This app is dedicated to numbers. This app can:
				</Typography>
			</div>
			<div className="div_list">
				<ul>
					<li>
						find factorial of inputed number-go to {linkText(links[0])} or click navigation item {navItemText("Factorial")};
					</li>
					<li>
						generate random numbers-go to {linkText(links[1])} or click navigation item {navItemText("Random")}.
					</li>
				</ul>
			</div>
		</StylesPage>
	)
}

export default Home;