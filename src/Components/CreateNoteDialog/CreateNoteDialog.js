import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '../SpeedDial/SpeedDial';
import classes from './CreateNoteDialog.module.css';
import CreateNoteIcon from '../CreateNoteIcon/CreateNoteIcon';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

export default function AlertDialog(props) {
    const myClasses = useStyles();
    
    const [open, setOpen] = React.useState(false);
    const [toggle, setToggle] = useState(0);

    function handleClickOpen() {
        setOpen(true);
        console.log(open)
    }

    function handleClose() {
        setOpen(false);
    }

    if (props.title.length > 0){
        setToggle(1);
    }
    

    return (
        <div
            className={classes.CreateNoteDialog}>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
      </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle 
                style={{backgroundColor:'blue',
                    color:'white'}}
                id="alert-dialog-title">{"Do you want to create a new note?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField
                        style={{width:'95%'}}
                            required
                            id="outlined-required"
                            label="Title of the note"
                            value={props.title.title}
                            className={myClasses.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={props.titleChangeHandler}
                        />
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" disables={toggle}>
                        Cancel
          </Button>
                    <Button onClick={() => {handleClose(); props.createNote()}} color="primary" autoFocus>
                        OK
          </Button>
                </DialogActions>
            </Dialog>
            <div className={classes.DisplaySpeedDial}>
                <SpeedDial classes={props.classes}  open={handleClickOpen} close={handleClose}/>
            </div>
            <div className={classes.DisplayCreateIcon}>
                <CreateNoteIcon  open={handleClickOpen} close={handleClose}/>
            </div>
        </div>
    );
}
