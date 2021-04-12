import React,{lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './NavigationBar';
import Jumbo from './components/jumbo';
import header_page from './components/header_page';

import StylesPage from './styledComponents/StylesPage';

import withSuspense from './hoc/withSuspense';

import {Provider} from "react-redux";
import {store} from './reduxFeature/';

const Factorial=lazy(()=>import('./pages/factorial'));
const Random=lazy(()=>import('./pages/random'));
const Home=lazy(()=>import('./pages/home'));

ReactDOM.render(
		<Provider store={store}>
			<Router>
				<NavigationBar/>
				<Jumbo/>
				<div id="content">
			        <Switch>
			            <Route exact path="/" component={withSuspense(Home)}/>
			            <Route exact path="/find_factorial" children={withSuspense(Factorial)}/>
			            <Route exact path="/random" render={withSuspense(Random)}/>
			            <Route children={()=>
			            	<StylesPage>
				            	<header>{header_page("h2","404 NOT FOUND!")}</header>
			            	</StylesPage>}/>
			        </Switch>
		    	</div>
	    	</Router>
    	</Provider>,
		document.getElementById('root')
);
