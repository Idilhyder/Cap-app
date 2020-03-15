import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe'




class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = {
            recipe: [],
            selectedCriteria: null,
    term: {
        name: "",
        directions: '',
    }
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
}

getRecipeItem = () => {
    var PER_PAGE = 2;
    axios.get(`http://localhost:5000/recipe?limit=${PER_PAGE}`)
    .then((response)=> {
      const data= response.data.recipeData;
      this.setState({ recipe: data});
      console.log('Pantry received')
    })
    .catch(() => {
      console.log('Error retrieving pantry')
    });
  }

componentDidMount() {
   this.getRecipeItem();
}

RecipeList = () => {
    const { recipe, term, selectedCriteria } = this.state;

    if (!selectedCriteria) {
        return recipe.map(function(currentRecipe, i) {
            return <Recipe recipe={currentRecipe} key={i} />;
        });
        } else {
        return recipe
            .filter(recipe => {
            return recipe[selectedCriteria] === term[selectedCriteria];
            })
            .map(matchingRecipe => {
            return <Recipe recipe={matchingRecipe} />;
            });
        }
};

onSearchHandler = e => {
    if (e.target.value.length === 0) {
    this.setState({
        term: {
        [e.target.name]: e.target.value
        },
        selectedCriteria: null
    });
    } else {
    this.setState({
        term: {
        [e.target.name]: e.target.value
        },
        selectedCriteria: e.target.name
    });
    }
};

render() {
    const { term } = this.state;
    return (
    <div>
        <div>
            <div className="container">
            <div className="row">
                <form>
                <label>Search</label>
                <input
                    type="text"
                    onChange={this.onSearchHandler}
                    value={term.name}
                    placeholder="Enter items"
                    name="recipe_name"
                />
                </form>
                {this.RecipeList()}
            </div>
        </div>
        </div>
    </div>
    );
}
}



export default RecipeSearch;
