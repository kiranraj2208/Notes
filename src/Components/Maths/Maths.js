import React from 'react';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const suggestions = [
    { label: 'simplify' },
    { label: 'factor' },
    { label: 'derive' },
    { label: 'integrate' },
    { label: 'zeroes' },
    { label: 'tangent' },
    { label: 'area' },
    { label: 'cos' },
    { label: 'sin' },
    { label: 'tan' },
    { label: 'arccos' },
    { label: 'arcsin' },
    { label: 'arctan' },
    { label: 'abs' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

const useStyles = makeStyles(theme => ({
    whole: {
        display: 'flex',
        paddingTop: '5%',
        width: '100%',
    },
    root: {
        flexGrow: 1,
        height: 250,
        width: '20%',
        padding: '0% 5%',
    },
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: theme.spacing(1, 2),
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing(2),
    },
}));

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

NoOptionsMessage.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function Control(props) {
    const {
        children,
        innerProps,
        innerRef,
        selectProps: { classes, TextFieldProps },
    } = props;

    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            {...TextFieldProps}
        />
    );
}

Control.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    selectProps: PropTypes.object.isRequired,
};

function Option(props) {
    return (
        <MenuItem
            ref={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

Option.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
};

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

Placeholder.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

SingleValue.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired,
};

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

MultiValue.propTypes = {
    children: PropTypes.node,
    isFocused: PropTypes.bool,
    removeProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object,
};

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

const solveMaths = () => {

}

export default function IntegrationReactSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [result, setResult] = React.useState('');
    const [buttonValue, setButtonValue] = React.useState('=>');
    const [type, setType] = React.useState('');
    const [expression, setExpression] = React.useState('');

    function handleChangeType(value) {
        setType(value);
    }

    function handleChangeExpression(event) {
        setExpression(event.target.value);
    }

    const getMath = () => {
        console.log(type.value, expression);
        const requestify = require('requestify');
        if(type !== ''  && expression !== ''){
            setButtonValue('solving')
        requestify.get(`https://newton.now.sh/${type.value}/${expression}`)
            .then(function (response) {
                // Get the response body (JSON parsed or jQuery object for XMLs)
                // alert(response.getBody());
                console.log(response.getBody());
                // console.log(object);
                setResult(response.getBody().result);
                setButtonValue('=>')
            }
            );
        }
        else{
            setButtonValue('error');
        }
    }

    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    };

    return (
        <div className={classes.whole}>
        <div className={classes.root}>
            <NoSsr>
                <Select
                    classes={classes}
                    styles={selectStyles}
                    inputId="react-select-single"
                    TextFieldProps={{
                        label: 'math type',
                        InputLabelProps: {
                            htmlFor: 'react-select-single',
                            shrink: true,
                        },
                        placeholder: 'Search a country (start with a)',
                    }}
                    options={suggestions}
                    components={components}
                    value={type}
                    onChange={handleChangeType}
                />
                <div className={classes.divider} />
            </NoSsr>
            </div>
            {/* <form className={classes.container} noValidate autoComplete="off"> */}
            <div
                style={{ padding: '0% 5%' }}>
                <TextField
                // style={{padding: '0% 5%'}}
                    id="outlined-name"
                    label="Expression"
                    multiline
                    rowsMax='4'
                    className={classes.textField}
                    value={expression}
                    onChange={handleChangeExpression}
                    margin="normal"
                    variant="outlined"
                />
                
            </div>
            <Button
                style={{
                    position: 'relative',
                    width: 100,
                    height: 40,
                    top:'20px',
                    fontSize: '80%',
                    backgroundColor: 'blue',
                    color: 'white'
                }}
                onClick={getMath}
            > {buttonValue}
                </Button>
            <div
            style={{padding: '0% 5%'}}>
            <TextField
                style={{ color: 'blue' }}
                id="outlined-name"
                label="Result"
                multiline
                rowsMax="4"
                disabled
                className={classes.textField}
                value={result}
                // onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
            />
            </div>

            

        </div>
    );
}
