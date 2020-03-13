import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            // recipe: []
        }
    }
    // getRecipeItem = () => {
    //     axios.get('http://localhost:5000/recipe/')
    //     .then((response)=> {
    //       const data= response.data.recipeData;
    //       this.setState({ recipe: data});
    //       console.log('Recipe returned')
    //     })
    //     .catch(() => {
    //       console.log('Error retrieving recipe')
    //     });
    //   }
    // componentDidMount = () => {
    //     this.getRecipeItem();
    // };

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,100)});
        };

render () {
    // let filteredRecipe = this.state.recipe.filter((recipe) => {
    //     return recipe.recipeData.toLowerCase.indexOf(this.state.search.toLocaleLowerCase) !== -1;
    // }
    // );
    console.log(this.state.search)
    return(
    <>
    <h1>TEST RECIPE</h1>
    <form onSubmit={this.submit}>
        <div className="form-input">
            <input
            type='text'
            name='search'
            placeholder="Enter item"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            />
        </div>
    <button>Search</button>
    </form>
    <div className="recipes">
      <h3>Your Explore</h3>
      {/* {filteredRecipe.map(item=>{
        return (
            <>
        <p>{item.name}</p>
        <p>{item.image}</p>
        <p>{item.rating}</p>
        <p>{item.ingredient}</p>
        <p>{item.directions}</p>
        <p>{item.prep}</p>
        <p>{item.cook}</p>
        <p>{item.readyIn}</p>
        <p>{item.calories}</p>
        </>
        )
      })} */}
        </div>
    </>
        )
    }
}
export default RecipeSearch;