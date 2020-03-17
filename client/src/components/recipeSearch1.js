import React, { Component } from 'react'
import axios from 'axios';
import Recipe from './recipe';




class RecipeSearch extends Component {
state = {
    query: '',
    results: [],
}

getRecipeItem = () => {
    console.log('get recipe called')
    console.log(this.state.query)

    axios.get(`http://localhost:5000/recipe/search/${this.state.query}`)
    .then((response)=> {
        const data= response.data;
        console.log(data)
        this.setState({ results: data});
        console.log('Recipe received')
      })
      .catch(() => {
        console.log('Error retrieving recipe')
      });
}


    
componentDidMount = () => {
    this.getRecipeItem();
}

handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
    query: this.search.value,
    }, () => {
    // if (this.state.query && this.state.query.length > 1) {
    //     if (this.state.query.length === 0) {
    //     this.getRecipeItem()
    //     }
    // } else if (!this.state.query) {
    // }
    })
}


handleSubmit = (event) => {
    event.preventDefault();
    this.getRecipeItem();
}

render() {
    console.log(this.state.results)
    
    return (
    <form 
        onSubmit={this.handleSubmit}>
        <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <Recipe 
        list={this.state.results} />
    </form>
    )
}
}

export default RecipeSearch
