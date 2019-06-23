import React from 'react';
import Link from '@material-ui/core/Link';
import First from '../First/First';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink, Route } from 'react-router-dom';
import classes from './Navigation.module.css';
import NotesCards from '../NotesCards/NotesCards';


const Navigation = props => {
    return (
        <div className={classes.Navigation}>
        <Router className={classes.Router}>
            <ul>
                <li>
                    <Link className={classes.link} component={RouterLink} to="/first">
                    Home
                </Link>
                </li>
                <li>
                    <Link className={classes.link} component={RouterLink}  to="/Second">
                    Notes
                </Link>
                </li>
                <li>
                    <Link to="/" className={classes.link} component={RouterLink} >
                        Other</Link>
                </li>
            </ul>
            <Route path="/first" component={First}/>
            <Route exact path="/second" component={NotesCards} />
        </Router>
        </div>
    );
}

export default Navigation;