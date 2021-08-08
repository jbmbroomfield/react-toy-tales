import React, { Component } from 'react';
import { createToy } from '../dbFunctions'

class ToyForm extends Component {

  state = {
    toyName: '',
    toyImage: ''
  }

  handleToyNameChange = event => {
    this.setState({
      ...this.state,
      toyName: event.target.value
    })
  }

  handletoyImageChange = event => {
    this.setState({
      ...this.state,
      toyImage: event.target.value
    })
  }

  handleFormSubmit = event => {
    const toy = {
      name: this.state.toyName,
      image: this.state.toyImage
    }
    createToy(toy)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleFormSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            value={this.state.toyName}
            onChange={this.handleToyNameChange}
          />
          <br/>
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            value={this.state.toyImage}
            onChange={this.handletoyImageChange}
          />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
