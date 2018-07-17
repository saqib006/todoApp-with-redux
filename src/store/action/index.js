export default class TodoAction{

    static ADD = 'ADD';
    static DELETE = 'DELETE';
    static UPDATE = 'UPDATE';


    static add(value){
        return{
            type: TodoAction.ADD,
            payload: value
        }
    }

    static delete(id){
        return{
            type: TodoAction.DELETE,
            payload: id
        }
    }

    static update(id, value){
        return{
            type: TodoAction.UPDATE,
            payload: {id: id, value:value}
        }
    }
}