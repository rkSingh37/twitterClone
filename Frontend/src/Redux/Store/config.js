import {createStore, combineReducers, applyMiddleware} from 'redux';

import userReducer from '../Reducers/userReducer';
// import postReducer from '../Reducers/postReducer';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer=combineReducers({user: userReducer});

const config=()=>{
    return createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
}
export default config;