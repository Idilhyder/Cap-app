import React, { Component } from 'react'
import axios from 'axios';
import Recipe from './recipeSearch/recipe';




class Select extends Component {

    state = {
        query: [],
        ingredients:[]
    }
    
    getRecipeItem = () => {
        console.log('get recipe called')
        console.log(this.state.query)
        axios.get(`http://localhost:5000/recipe/search/meal?`, {
            params: {
                search: this.state.search
            }
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
        this.getRecipeItem();
    }
    
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
        query: this.search.value,
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
      <form 
        onSubmit={this.handleSubmit}>
        <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        </form>
        <Recipe 
        list={this.state.ingredients} />
    </>
    );
    }
}

export default Select



{/* <div className="box-container">
    {this.state.ingredients.map((d, i) => {
    return (
    <ul key={d.id}>
    <h5 className="card-title">{d.name}</h5>
    <li className="card-text">{d.directions}</li>
    <li className="card-text">{d.cook}</li>
    <li className="card-text">{d.prep}</li>
    <li className="card-text">{d.readyIn}</li>
    <li className="card-text">{d.calories}</li>
    <li className="card-text">{d.rating}</li>
    <li className="card-text">{d.ingredients}</li>
    </ul>
        )
    })}
    </div> */}