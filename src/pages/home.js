import React from 'react';

import {Typography} from '@material-ui/core';

import StylesPage from '../styledComponents/StylesPage';

import link_text from '../components/link_text';
import nav_item_text from '../components/nav_item_text';

import header_page from '../components/header_page';

const links=["/find_factorial","/random"];


class Home extends React.Component
{
	render()
	{
		return(
			<StylesPage>
				<header>{header_page("h1","Home page.")}</header>
				<div className="div_text">
					<Typography variant="body1">
						This site is dedicated to numbers. On this site you can:
					</Typography>
				</div>
				<div className="div_list">
					<ul>
						<li>
							find factorial of inputed number-go to {link_text(links[0])} or click navigation item {nav_item_text("Factorial")};
						</li>
						<li>
							generate random numbers-go to {link_text(links[1])} or click navigation item {nav_item_text("Random")}.
						</li>
					</ul>
				</div>
			</StylesPage>
		);
	}
}

export default Home;