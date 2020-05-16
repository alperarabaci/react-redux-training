import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {

    state = {
        name: '',
        age: 0
    }

    onChangeHandler= (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    return (
      <div className="AddPerson">
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler} />
        <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.onChangeHandler} />
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
