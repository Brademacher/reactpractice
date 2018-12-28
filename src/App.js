import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ben', age: 33 },
      { name: 'Richard', age: 27 },
      { name: 'Peter', age: 35 },
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person =  {
      ...this.state.person[personIndex]
    };

    this.setState({
      persons: [
        { id: 'asdf', name: 'Ben', age: 33 },
        { id: 'sdfg', name: event.target.value, age: 27 },
        { id: 'dfgh', name: 'Peter', age: 35 }
      ]
    })

  }

  togglePersonsHandler = ( event, id ) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is  really working!</p>
        <button
          style={styles}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
