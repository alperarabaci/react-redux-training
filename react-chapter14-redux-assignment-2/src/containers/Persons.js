import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {    

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Djorkaeff',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.addPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
       this.props.deletePerson(personId);
    }

    render () {

        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
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