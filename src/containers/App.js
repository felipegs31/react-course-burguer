import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[app.js] inside ctor', props);
  }

  componentWillMount() {
    console.log('[app.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[app.js] inside componentDidMount');
  }

  state = {
    persons: [
      {id: '1', name: 'Manu', age: 12},
      {id: '2', name: 'Max', age: 28}
    ],
    showPersons: false,
    toggleClicked: 0
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 123}
      ]
    })
  }

  nameChangeHandler = (event, id)=> {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person =  {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[app.js] inside render');
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
      );
    }

    return (
        <>
          <Cockpit 
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I am a react app!!!!');
  }
}

export default withClass(App, classes.App);
