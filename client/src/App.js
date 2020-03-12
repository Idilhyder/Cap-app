import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

    state = {
      name: '',
      body: ''
    };
  
  
  handleChange = ({ target }) => {
    const { name, value }= target;
    this.setState({
      [name]:value });
  }

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      body: this.state.body,
    }

    axios({
      url: 'http://localhost:5000/pantry',
      method: 'POST',
      data: payload
    })
    .then(()=> {
      console.log('Data sent');
      this.resetUserInputs();
    })
    .catch(()=> {
      console.log('Data not sent');
    });
  };
  
  resetUserInputs = () => {
    this.setState({
      name: '',
      body: ''
    });
  };


  render() {

    console.log(this.state)

    return (
      <>
      <h1>TEST PANTRY</h1>
      <form onSubmit={this.submit}>
        <div className="form-input">
          <input
          type='text'
          name='name'
          placeholder="Enter item"
          value={this.state.name}
          onChange={this.handleChange}
          />
          </div>
          <button>Submit</button>
      </form>

      <h1>TEST RECIPE</h1>
      <form onSubmit={this.submit}>
        <div className="form-input">
          <input
          type='text'
          name='search'
          placeholder="Enter item"
          value={this.state.search}
          onChange={this.handleChange}
          />
          </div>
          <button>Search</button>
      </form>
      </>
    );
  }
}

export default App;
