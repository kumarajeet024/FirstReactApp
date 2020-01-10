import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    
        const assignedclasses= [];
        let btnClass='';
        if(props.showPersons){
            btnClass=classes.red;
        }
        

    if(props.persons.length<=2){
    assignedclasses.push(classes.red); //classes = ['red']
    }
    if(props.persons.length<=1){
    assignedclasses.push(classes.bold);  //classes = ['red','bold']
    }

     
    return (
        <div className={classes.Cockpit}>
        <h1>This is ninjakai bruh!!</h1>
        <p className ={assignedclasses.join(' ')}>This is a very long paragraph</p>
        <button className={btnClass} onClick={props.clicked}>Toggle List</button>
        </div>
    ); 

};

export default cockpit;