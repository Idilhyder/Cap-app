import React, { Component } from 'react'
import axios from 'axios';
import Recipe from './recipe';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";



class RecipeSearch extends Component {
state = {
    query: '',
    results: [],
}

getInfo = () => {
    axios.get(`http://localhost:5000/recipe/search/${this.state.query}`)
    .then((response)=> {
        const data= response.data.recipeData;
        this.setState({ results: data});
        console.log('Recipe received')
      })
      .catch(() => {
        console.log('Error retrieving recipe')
      });
}
        

    
componentDidMount = () => {
    this.getInfo();
    let query = this.getUrlParams().toString();
}

handleInputChange = () => {
    this.setState({
    query: this.search.value
    }, () => {
    if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
        this.getInfo()
        }
    } else if (!this.state.query) {
    }
    })
}

render() {
    console.log(this.state.results)
    return (
    <form>
        <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <Recipe list={this.state.results} />
    </form>
    )
}
}

export default RecipeSearch