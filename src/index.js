import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './NavigationBar';
import Jumbo from './components/jumbo';
import headerPage from './components/headerPage';

import StylesPage from './styledComponents/StylesPage';

import withSuspense from './hoc/withSuspense';

import { Provider } from 'react-redux';
import { store } from './reduxFeature/';

const Factorial = lazy(() => import('./pages/factorial'));
const Random = lazy(() => import('./pages/random'));
const Home = lazy(() => import('./pages/home'));

const WithSuspenseFactorial = withSuspense(Factorial);
const WithSuspenseRandom = withSuspense(Random);
const WithSuspenseHome = withSuspense(Home);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/numbers-react">
      <NavigationBar />
      <Jumbo />
      <div id="content">
        <Routes>
          <Route path="/" element={<WithSuspenseHome />} />
          <Route path="/find_factorial" element={<WithSuspenseFactorial />} />
          <Route path="/random" element={<WithSuspenseRandom />} />
          <Route
            path="*"
            element={
              <StylesPage>
                <header>{headerPage('404 NOT FOUND!')}</header>
              </StylesPage>
            }
          />
        </Routes>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
