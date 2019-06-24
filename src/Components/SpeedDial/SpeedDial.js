import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';

const styles = theme => ({
    root: {
        height: 380,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
});

const actions = [
    // { icon: <FileCopyIcon />, name: 'Copy' },
    // { icon: <SaveIcon />, name: 'Save' },
    { icon: <FavoriteIcon />, name: 'List favorites' },
    { icon: <CreateIcon />, name: 'create'},
    // { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDialTooltipOpen extends React.Component {
    state = {
        open: false,
        hidden: false,
        dialogOpen: false,
    };
    dialog = null;

    handleVisibility = () => {
        this.setState(state => ({
            open: false,
            hidden: !state.hidden,
        }));
    };

    handleClick = () => {
        this.setState(state => ({
            open: !state.open,
        }));
        // this.props.openDialog();
        // this.dialog = <CreateNoteDialog open={true} />
    };

    handleOpen = () => {
        if (!this.state.hidden) {
            this.setState({
                open: true,
            });
        }
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
        
    };
    closeDialog = () => {
        this.setState({
            dialogOpen: false,
        })
    }

    createDialog = () => {
        this.setState(state => ({
            dialogOpen: !state.dialogOpen
        }))
    }

    render() {
        const { classes } = this.props;
        const { hidden, open } = this.state;

        return (
            <div className={classes.root}>
                {/* <CreateNoteDialog open={this.state.dialogOpen} closeDialog={this.closeDialog}/> */}
                {/* <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button> */}
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    className={classes.speedDial}
                    hidden={hidden}
                    icon={<SpeedDialIcon />}
                    onBlur={this.handleClose}
                    onClick={this.handleClick}
                    onClose={this.handleClose}
                    onFocus={this.handleOpen}
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}
                    open={open}
                >
                    {actions.map((action, index) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={() => {
                                
                                if(index === 1) {
                                    console.log(this.props.open)
                                    this.props.open();
                                    this.handleClose()
                                }
                            }
                        }
                        />
                    ))}
                </SpeedDial>
                
            </div>
        );
    }
}

SpeedDialTooltipOpen.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDialTooltipOpen);
