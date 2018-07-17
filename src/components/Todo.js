import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import TaskList from './List';
import TodoAction from '../store/action/index';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';


class Todo extends Component{

    constructor(props){
        super(props);

        this.state = {
           btnName: 'Add',
           task:'',
           btnHandler: this.submitHandler
        }

     
    }

    changeHandler = (eve) => {
        this.setState({
            task: eve.target.value
        })

    }

    updateHandler = (id) => {
        let index = this.props.taskArray.findIndex(value => value.id === id);
        this.setState({
            btnName: 'Update',
            task: this.props.taskArray[index].task,
            btnHandler: () => { this.props.updateTask(id, this.state.task); this.afterUpdate() }
            
            
        });

        console.log('what', this.props.taskArray[index].task)
    }

    afterUpdate = () => {
        this.setState({
            btnName: 'Add',
            btnHandler: this.submitHandler,
            task: ''
        })
    }

    submitHandler = () =>{
        this.props.AddTask({
            id: new Date().getTime(),
            task: this.state.task
        });
        this.setState({
            task: ''
        })
    }
   


    render(){
        return(

            
            <div>
                <AppBar position="static" style={{'backgroundColor': '#2196F3'}}>
                <Toolbar>
                <IconButton  color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title"  style={{'color': 'white'}} >
                    Todo App With Redux
                </Typography>
                
                </Toolbar>
              </AppBar>

                <Grid container spacing={24} padding={24} direction="column" align="center">
                <Grid item xs={12} md={8} >
                
                

<Input value={this.state.task} btnName={this.state.btnName} onChange={this.changeHandler} btnHandler={this.state.btnHandler}/>
<List >
{
    this.props.taskArray.map(value => {
        return <TaskList id={value.id} task={value.task} delete={() => {this.props.DelTask(value.id)}}  update={() => {this.updateHandler(value.id)}}/>
    })
}
</List>

                </Grid>

                </Grid>
               

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        taskArray: state.TodoReducer.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    AddTask: value => dispatch(TodoAction.add(value)),
    DelTask: id => dispatch(TodoAction.delete(id)),
    updateTask: (id, value) => dispatch(TodoAction.update(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);