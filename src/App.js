import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Servus im a react app 3</h1>
       <p>Test Paragraph</p>
       <Person name="MaX" age="28" />
       <Person name="Tes" age="13">My Hobbies: Racing</Person>
       <Person name="Ass" age="12" />
      </div>
    );
  }
}

export default App;