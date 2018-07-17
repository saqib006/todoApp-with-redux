import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';


class TaskList extends Component{
    render(){
        return(
            
            <ListItem key={this.props.id}>
            <ListItemText><Paper style={{'padding':10, 'marginRight': 40}}> {this.props.task}
            <Button variant="contained" color="secondary" onClick={this.props.delete}> Delete </Button>
            <Button variant="contained" color="primary" onClick={this.props.update}> Update </Button>
            </Paper>
            </ListItemText>
            
            </ListItem>
            
        )
    }
}

export default TaskList;