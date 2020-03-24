import React, { Component } from 'react'
import axios from 'axios';
import SideBar from '../card/sideBar';
import "./../Meal-Selection/select.scss";
import Img from 'react-image';





class Select extends Component {

    state = {
        query: '',
        ingredients:[]
    }
    
    getSearchRecipeItem = () => {
        console.log('get recipe called')
        axios.get(`http://localhost:5000/recipe/search/${this.state.query}`, {

        })
        .then((response)=> {
            const data= response.data;
            console.log(data)
            this.setState({ingredients: data});
            console.log('Recipe received')
        })
        .catch(() => {
        console.log('Error retrieving recipe')
        });
    }
    
    
        
    componentDidMount = () => {
        this.getSearchRecipeItem();
    }
    
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            query: this.search.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.getSearchRecipeItem();
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
            ref={input => this.search = input}
            onChange={this.handleInputChange}/>
        </form>
        </div>
    <div className="recipe">
    {this.state.ingredients.map(item=> {
    return (
        <>
    <ul key={item.id}>
    <h5 className="recipe__title">{item.name}</h5>
    <Img
    className='recipe__img'
    src={[item.image.toString(), 'https://svg-clipart.com/svg/food/P9kLlld-food-not-bombs-logo-vector.svg']}
    alt="food-photo"
    />
    <div className='recipe__box'>
    <div className='recipe_text'>
        <h5>Ingredients</h5>
    <div className="recipe_text">{item.ingredients}</div>
        <h5>Directions</h5>
    <div className="recipe_text">{item.directions}</div>
    <div className='small__text'>
        <h5>Cook Time</h5>
    <div className="recipe_text">{item.cook}</div>
        <h5>Prep Time</h5>
    <div className="recipe_text">{item.prep}</div>
        <h5>Ready In</h5>
    <div className="recipe_text">{item.readyIn}</div>
        <h5>Calories</h5>
    <div className="recipe_text">{item.calories}</div>
        <h5>Rating</h5>
    <div className="recipe_text">{item.rating}</div>
    </div>
    </div>
    </div>
    </ul>
    </>
    )
    })} 
    </div>
    </>
    );
    }
}

export default Select

