import React, { Component } from 'react';
import axios from 'axios';
import RecipeSearch from "./../components/recipeSearch1.js";
import Pantry from "./../components/pantry";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";


class Main extends Component {
  constructor () {
    super();
    this.state = {
          name: '',
          pantry: [],
          recipe: [],
        };
  }
  getPantryItem = () => {
    axios.get(`http://localhost:5000/pantry`)
    .then((response)=> {
      const data= response.data.pantryData;
      this.setState({ pantry: data});
      console.log('Pantry received')
    })
    .catch(() => {
      console.log('Error retrieving pantry')
    });
  }


  componentDidMount = () => {
    this.getPantryItem();
  }

  handleChange = ({ target }) => {
    const { name, value }= target;
    this.setState({
      [name]:value });
  }

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
    }

    axios({
      url: `http://localhost:5000/pantry`,
      method: 'POST',
      data: payload
    })
    .then(()=> {
      console.log('Data sent');
      this.resetUserInputs();
      this.getPantryItem();
    })
    .catch(()=> {
      console.log('Data not sent');
    });
  };
  
  resetUserInputs = () => {
    this.setState({
      name: '',
    });
  };



  render() {
    console.log(this.state.pantry)
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
    <div className="pantry">
    <h3>Your Pantry</h3>
    <Pantry items={this.state.pantry}/>
    </div>

    <h1>YOUR SEARCH RESULTS</h1>
    <RecipeSearch/>
      </>
    );
}
}


export default Main;
