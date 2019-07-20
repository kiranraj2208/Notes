import React from 'react';
import Link from '@material-ui/core/Link';
import First from '../First/First';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink, Route } from 'react-router-dom';
import classes from './Navigation.module.css';
import NotesCards from '../NotesCards/NotesCards';
import Maths from '../Maths/Maths';


const Navigation = props => {
    return (
        <div className={classes.Navigation}>
        <Router className={classes.Router}>
            <ul>
                <li>
                    <Link className={classes.link} component={RouterLink} to="/">
                    Home
                </Link>
                </li>
                <li>
                    <Link className={classes.link} component={RouterLink}  to="/second">
                    Notes
                </Link>
                </li>
                <li>
                    <Link to="/third" className={classes.link} component={RouterLink} >
                        Maths</Link>
                </li>
            </ul>
            <Route exact path="/" component={First}/>
            <Route path="/second" component={NotesCards} />
            <Route path="/third" component={Maths}/>
        </Router>
        </div>
    );
}

export default Navigation;