import { combineReducers } from 'redux';
import app from './app';
//combinacion de reducer
const rootReducer = combineReducers({
    appState: app,
});

export default rootReducer;