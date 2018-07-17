import TodoAction from '../action/index';

const INITIAL_STATE = {
    todo:[{id:1,task: 'saqib'}]
}

export default function TodoReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case(TodoAction.ADD):
            return Object.assign({}, state, {todo:[...state.todo, action.payload]})
            break;
        case(TodoAction.DELETE):
            return Object.assign({}, state, {todo:state.todo.filter(value => value.id !== action.payload)})
            break;
        case(TodoAction.UPDATE):
            let obj = {...state};
            let index = obj.todo.findIndex(element => element.id === action.payload.id);
            obj.todo[index].task = action.payload.value;
            return obj;
            break;
        default:
            return state;
    }
}
