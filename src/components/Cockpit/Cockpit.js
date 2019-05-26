import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerson) { 
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if(props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Show Persons</button>
        </Aux>
    );
};

export default cockpit;