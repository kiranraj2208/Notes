import React from 'react';
import Modal from '@material-ui/core/Modal';
import DescriptionDetails from '../DescriptionDetails/DescriptionDetails';
import Typography from '@material-ui/core/Typography';
import classes from './Description.module.css';

const SimpleModal = props => {
    // getModalStyle is not a pure function, we roll the style only on the first render

    // const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
                onClose={props.modalClose}
            >
                <div className={classes.Paper}>
                <Typography className={classes.typo} variant="h3" id="modal-title">
                    {props.title}
                </Typography>
                <Typography className={classes.typoSecond} variant="subtitle1" id="simple-modal-description">
                    {props.timestamp}
                </Typography>
                
          <DescriptionDetails description={props.description}
            changeDescription={props.changeDescription}
          />
                </div>
            </Modal>
        </div>
    );
}

export default SimpleModal;