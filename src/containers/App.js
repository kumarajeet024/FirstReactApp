import React, { Component } from 'react';
import classes from './App.css';
// import Radium,{StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit';

const StyledButton = styled.button`

  background-color : ${props=>props.conditon ? 'red' : 'green'};
  color:white;
  font :inherit;
  border:1px solid blue;
  padding :8px;
  cursor : pointer;
  &:hover {
    background-color :${props => props.conditon ? 'salmon' : 'yellow'};
    color:black;
  }

`;
class App extends Component {
  //state object is used for handling the attributes from inside only in case of Class based components
  state = {
    persons : [
      {id: "1",name:"Ajeet",age:20},
      {id:"2",name:"Alok",age:20},
      {id:"3",name:"Akshay", age:20}
    ]
  };

  SwitchNameHandler = (newName) =>{
    //console.log("Clicked now!!!");
    //Don't do this this.state.persons[0].name="Changed name";
    //use setState method defined in Components class

    this.setState({persons : [
      {name:"Maxi",age:20},
      {name:"Alok",age:20},
      {name:"Changed Name 2", age:20}
    ],

    showPersons :false
  
  })
  }

  NameChangeHandler = (event,id) =>{
    //finding the index of person with same id
    //this can also be done easily just by passing the index as argument
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id===id;
    });
    //copy of a person object with index personIndex
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person =Object.assign({},this.state.persons[personIndex]);


    //changing the name of person
    person.name = event.target.value;
    
    //copy of persons array of objects in state
    const persons = [
      ...this.state.persons
    ];
    persons[personIndex]=person;
    this.setState({persons : persons});
  }

deletePersonHandler = (SelIndex) =>{
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(SelIndex,1);
  this.setState({persons:persons})
}


togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});
}

  //render method id used to render react component or html code
  render() {

const style = {
//   backgroundColor : 'green',
//   color:'white',
//   font :'inherit',
//   border:'1px solid blue',
//   padding : '8px',
//   cursor : 'pointer',
//   ':hover':{
//     backgroundColor :'lightgreen',
//     color:'black'
//   }
 };

let person = null;
let btnClass='';
if(this.state.showPersons){
  person= 
     <Persons 
     persons={this.state.persons}
     clicked={this.deletePersonHandler}
     changed={this.NameChangeHandler}
     />
    {/* <Person 
     name ={this.state.persons[0].name} 
     age ={this.state.persons[0].age}
     click = {this.SwitchNameHandler.bind(this,"MAXXXX!!")}
     >Specialist on codeforces </Person>

     <Person 
     name= {this.state.persons[1].name} 
     age={this.state.persons[1].age}
     changes={this.NameChangeHandler} />
     
     <Person 
     name= {this.state.persons[2].name} 
     age ={this.state.persons[2].age} 
     changes={this.NameChangeHandler}/> */}
;

    // style.backgroundColor='red';
    // style[':hover'] = {

    // backgroundColor :'salmon',
    // color:'black'
    // }
}

//dynamic classes
//let classes = ['red','bold'].join(' '); 


    return (
    
      <div className={classes.App}>
       <Cockpit showPersons={this.state.showPersons} persons={this.state.persons}
       clicked={this.togglePersonHandler}/>
        {person}

      {/* conditional statement types::::  

       { this.state.showPersons ?
          <div>
          <Person 
           name ={this.state.persons[0].name} 
           age ={this.state.persons[0].age}
           click = {this.SwitchNameHandler.bind(this,"MAXXXX!!")}
           >Specialist on codeforces </Person>
   
           <Person 
           name= {this.state.persons[1].name} 
           age={this.state.persons[1].age}
           changes={this.NameChangeHandler} />
           
           <Person 
           name= {this.state.persons[2].name} 
           age ={this.state.persons[2].age} 
           changes={this.NameChangeHandler}/>
   
          </div> : null
       } */}
       
       
        
      </div>
           //we can't define html element here; there must be a root in which html is defined
    );

    //createElement creates html elements in react, first argument as html tag then configuration (js object) then any amount of children
    //chikdren means nested elements

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'It must be working now!!!'));
  }
}
//export default class
export default App;


/*------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------
//using react hooks::useState 

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  //state object is used for handling the attributes from inside only in case of Class based components
  const [personState,setPersonState] = useState({
    persons : [
      {name:"Ajeet",age:20},
      {name:"Alok",age:20},
      {name:"Akshay", age:20}
    ]
  });

  const SwitchNameHandler = () =>{
    //console.log("Clicked now!!!");
    //Don't do this this.state.persons[0].name="Changed name";
    //use setState method defined in Components class

    setPersonState({persons : [
      {name:"ChangeD Name",age:20},
      {name:"Alok",age:20},
      {name:"Changed Name 2", age:20}
    ]})
  }

  //render method id used to render react component or html code
    return (
      <div className="App">
        <h1>This is ninjakai bruh!!</h1>
        <p>This is a very long paragraph</p>
        <button onClick = {SwitchNameHandler}>Switch Name </button>
        <Person name = {personState.persons[0].name} age ={personState.persons[0].age}>Specialist on codeforces </Person>
        <Person name= {personState.persons[1].name} age={personState.persons[1].age} />
        <Person name= {personState.persons[2].name} age ={personState.persons[2].age} />
      </div>
      //we can't define html element here; there must be a root in which html is defined
    );

    //createElement creates html elements in react, first argument as html tag then configuration (js object) then any amount of children
    //chikdren means nested elements

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'It must be working now!!!'));
  
}
//export default class
export default app;*/
