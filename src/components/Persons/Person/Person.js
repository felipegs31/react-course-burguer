import React, {Component} from 'react';
import classes from './Person.module.css'
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[PERSON.js] inside ctor', props);
      }
    
      componentWillMount() {
        console.log('[PERSON.js] inside componentWillMount');
      }
    
      componentDidMount() {
        console.log('[PERSON.js] inside componentDidMount');
        this.inputElement.focus();
      }

    render() {
        console.log('[PERSON.js] inside render');

        return (
            <>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    ref={(inp) => { this.inputElement = inp}}/>
            </>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);

