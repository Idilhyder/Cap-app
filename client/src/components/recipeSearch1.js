import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe';
const queryString = require('query-string');




class RecipeSearch extends Component {
    constructor() {
        super();
        this.state= {
            query: '',
            recipe: []
        }
    }


getRecipeItem = (searchInput) => {
    axios.get(`http://localhost:5000/recipe/search/${searchInput}`)
    .then((response)=> {
      const data= response.data.recipeData;
      this.setState({ recipe: data});
      console.log('recipe received')
    })
    .catch(() => {
      console.log('Error retrieving recipe')
    });
  }

handleSearch = () => {
    this.getRecipeItem(this.state.query);
    };

handleOnChange = event => {
    this.setState({ query: event.target.value });
    };


render() {  
    
    return (
        
    <div>
        <div>
            <div className="container">
            <div className="row">
                <form>
                <label>Search</label>
                <input
                    type="text"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.query}
                    placeholder="Enter items"
                    name="search"
                />
                <button onClick={this.handleSearch}>Search</button>
                </form>
                {this.state.meals ? (
            <div>
            {this.state.recipe.map((meal, index) => (
            <div key={index}>
            <h1>{meal.name}</h1>
            <img src={meal.image} alt="meal-thumbnail" />
            </div>
            ))}
            </div>
            ) : (
            <p>Try searching for a meal</p>
            )}
            </div>
        </div>
        </div>
    </div>
    );
}
}



export default RecipeSearch;
