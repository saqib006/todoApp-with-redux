import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Input extends Component{
    render(){
        return(
            <div style={{'margin-top':20, 'text-align':'center'}}>
            <TextField type='text' value={this.props.value} onChange={this.props.onChange}/>
            <Button type='button' value={this.props.btnName} variant="contained" color="primary" onClick={this.props.btnHandler}>{this.props.btnName}</Button>
            </div>
        )
    }
}

export default Input;