import React, { Component } from 'react'
import axios from 'axios';
import Recipe from '../recipeSearch/recipe';
import SideBar from '../card/sideBar';
import "./../Meal-Selection/select.scss";
import SearchForm from './../Meal-Selection/form-select';
import RecipeExploreModal from "./../exploreModal/recipeExplore";
import Img from 'react-image';
import "./../recipeSearch/recipe.scss";
import Pantry from "./../pantry/pantry";




class Select extends Component {

    state = {
        query: '',
        ingredients:[]
    }
    
    getSearchRecipeItem = () => {
        console.log('get recipe called')
        axios.get(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${this.state.query}`, {

        })
        .then((response)=> {
            const data= response.data.meals;
            console.log(data)
            this.setState({ingredients: data});
            console.log('Recipe received')
        })
        .catch(() => {
        console.log('Error retrieving recipe')
        });
    }
    
    
        
    componentDidUpdate = () => {
        this.getSearchRecipeItem();
    }
    
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
        
        })
    }
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.getRecipeItem();
    }
    

render() {
    console.log(this.state.ingredients)
    console.log()
    return (
        <>
        <SideBar/>
        <div className='results__wrapper'>
            <h1>Mix and Match New and Old Ingredients</h1>
        <form 
            className="results__form"
            onSubmit={this.handleSubmit}>
            <input 
            className="results__search"
            placeholder="Enter an ingredient..."
            value={this.query}
            onChange={this.handleInputChange}/>
        </form>
    <div className="recipe">
    {this.state.ingredients.map(item=>{
    return (
    <>
    <ul key={item.id}>
    <h5 className="recipe__title">{item.strMeal}</h5>
    <Img
    className='recipe__img'
    src={[item.strThumb, 'https://svg-clipart.com/svg/food/P9kLlld-food-not-bombs-logo-vector.svg']}
    alt="food-photo"
    />
    </ul>
    </>
    )
    })} 
    </div>
    <Pantry/>
    </div>
        </>
    );
    }
}

export default Select

