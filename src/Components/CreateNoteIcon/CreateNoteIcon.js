import React from 'react';
import classes from './CreateNoteIcon.module.css'
import CreateIcon from '@material-ui/icons/CreateRounded';
import IconButton  from '@material-ui/core/IconButton';


const CreateNoteIcon = props => {
    return (
        <div className={classes.CreateNoteIcon}>
        <IconButton onClick={props.open}>
            <CreateIcon />
        </IconButton>
        </div>
    )
}

export default CreateNoteIcon;