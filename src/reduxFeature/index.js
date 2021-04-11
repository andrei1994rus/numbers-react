import {combineReducers,createStore, applyMiddleware} from 'redux';
import reduxReducer from './reduxReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer=combineReducers(
{
    array_redux:reduxReducer
});

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));