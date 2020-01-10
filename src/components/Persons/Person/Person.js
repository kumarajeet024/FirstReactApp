//create a new component with new approach
import React from 'react';
import classes from './Person.css';


//div component

const person = (props) => {
    //return <p>I'm am ninjakai</p>
    //return <p>Some Random no.:: {Math.floor(Math.random()*40)}</p>
    //for accessing attributes under <Person name=" " age =" " /> we use props as property
    //return <h3>I am {props.name} and i am {props.age} years old</h3>

    //for accessing children between components we use props.children

    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    };

    return (
       // <div className="Person" style={style}>
       <div className={classes.person}>
            <h3 onClick = {props.click}>I am {props.name} and i am {props.age} years old</h3>
            <p>{props.children}</p>
            <input type="text" onChange={props.changes} value={props.name}/>
        </div>
        //</div>
    )

};

export default person; 