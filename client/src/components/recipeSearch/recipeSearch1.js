import React, { Component } from 'react'
import axios from 'axios';
import './recipeSearch.scss';
import RecipeExploreModal from '../exploreModal/recipeExplore';

class RecipeSearch extends Component {
state = {
    query: '',
    results: [],
    search:[],
    showModal: false
}

getRecipeItem = () => {
    console.log('get recipe called')
    console.log(this.state.query)

    axios.get(`http://localhost:5000/recipe/roulette/${this.state.query}`)
    .then((response)=> {
        const data= response.data;
        console.log(data)
        this.setState({ results: data});
        this.handleOpenModal();
        this.resetUserInputs();
        
        console.log('Recipe received')
        
      })
      .catch(() => {
        console.log('Error retrieving recipe')
      });
}
getRecipeSearchItem = () => {
    console.log('get recipe called')
    console.log(this.state.query)

    axios.get(`http://localhost:5000/recipe/search/${this.state.query}`)
    .then((response)=> {
        const data= response.data;
        console.log(data)
        this.setState({ search: data});
        this.handleOpenModal();
        this.resetUserInputs();
        
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
    query: this.search.value
    })
}

  handleOpenModal = () => {
    this.setState({showModal:true});
    console.log("modal opened")
  }
  handleCloseModal = () => {
      this.setState({showModal:false})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getRecipeItem();
}
resetUserInputs = () => {
    this.setState({
      query: '',
    });
  };

render() {
    console.log(this.state.results)
    
    return (
        <>
        
    <form 
        onSubmit={this.handleSubmit}>
            <h1 className="roulette__title">Chef's Roulette</h1>
        <input 
        className="main__search"
        placeholder="Enter an ingredient..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
    </form>
    <RecipeExploreModal 
    list={this.state.results}
    isOpen={this.state.showModal}
    onRequestClose={this.handleCloseModal}
    />
    </>
    )
}
}

export default RecipeSearch
