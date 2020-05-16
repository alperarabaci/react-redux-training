import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {    

    personAddedHandler = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name:name,
            age: age
        }
        this.props.addPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
       this.props.deletePerson(personId);
    }

    render () {

        return (
            <div>
                <AddPerson personAdded={(name, age) => this.personAddedHandler(name, age)} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePerson: (id) => dispatch({type: 'DELETE', id: id}),
        addPerson: (person) => dispatch({type: 'ADD', person:person})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);