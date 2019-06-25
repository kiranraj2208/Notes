import React from 'react';
import { TextField } from '@material-ui/core';

const TextFieldInDialog = props => (<input
    style={{ width: '95%' }}
    // required
    // id="outlined-required"
    // label="Title of the note"
    // value={props.title}
    // // className={myClasses.textField}
    // margin="normal"
    // variant="outlined"
    onChange={props.titleChangeHandler}
/>)

export default TextFieldInDialog;