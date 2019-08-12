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

  switchNameHandler = () => {
    console.log('Was clicked!');
  } 

  render() {
    return (
      <div className="App">
       <h1>Servus im a react app 3</h1>
       <p>Test Paragraph</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;