import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const DescriptionDetails = props => {

    const useStyles = makeStyles(theme => ({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '95%',
        },
    }));
    const classes = useStyles();
    
    return (
    <div>
        <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="10"
            defaultValue={props.description}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={props.changeDescription}
        />
    </div>
    )
}

export default DescriptionDetails;