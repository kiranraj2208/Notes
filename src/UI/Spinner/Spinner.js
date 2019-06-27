import React from 'react';
import classes from './Spinner.module.css';
import Aux from '../../Hoc/Aux';


export default function CircularIndeterminate(props) {

    let loader = null;
    if( props.loading ) {
        loader = (
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', zIndex: '200',
                position: 'fixed',
                left: '0%', top: '0%'
            }}>
                <div className={classes.loader}>
                    Loading...
        </div>
            </div> 
        )
    }
    return (
            <Aux>
                {loader}
                </Aux>
    );
}
