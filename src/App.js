import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';



class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Max 2', age: 29 },
      { name: 'Max 3', age: 30 },
      { name: 'Max 4', age: 31 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Dont to this --- this.state.persons[0].name = 'Maxiumus';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Max 2', age: 29 },
        { name: 'Max 3', age: 30 },
        { name: 'Max 4', age: 31 }
    ]}
    )
  }

  nameChangesHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Max 3', age: 30 },
        { name: 'Max 4', age: 31 }
    ]}
    )
  } 

  render() {
    return (
      <div className="App">
       <h1>Servus im a react app 3</h1>
       <p>Test Paragraph</p>
       <button onClick={() => this.switchNameHandler('FUCK')}>Switch Name</button>
       <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
       <Person
       name={this.state.persons[1].name}
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'LOL')}
       changed={this.nameChangesHandler}
       >
         My Hobbies: Racing</Person>
       <Person
       name={this.state.persons[2].name}
       age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;