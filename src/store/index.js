import {combineReducers, createStore} from 'redux'; 
import TodoReducer from './reducer/index';

let rootReducer = combineReducers({
    TodoReducer: TodoReducer
})

export let store = createStore(rootReducer);