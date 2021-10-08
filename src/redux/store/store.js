import {createStore} from 'redux'
import combineReducers from '../reducer/combinedReducer'
export const store=createStore(combineReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())