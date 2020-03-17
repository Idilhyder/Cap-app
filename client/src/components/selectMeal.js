import React, { Component } from 'react'
import axios from 'axios';
import Recipe from './recipe';




class Select extends Component {
state = {

    results: [],
    pantry: []
}
pantry = () => {
    console.log('get pantry called')
  
    axios.get(`http://localhost:5000/pantry/`)
    .then((response)=> {
        const data= response.data.pantryData;
        console.log(data)
        this.setState({ pantry: data});
        console.log('Recipe received')
      })
      .catch(() => {
        console.log('Error retrieving recipe')
      });
}
select = () => {
    console.log('select called')
    axios.get(`http://localhost:5000/recipe/select-meal`, {
        params: {
            ingredients: this.state.pantry
        }
    })
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
    this.pantry();
    this.select();
}

// handleInputChange = (event) => {
//     event.preventDefault();
//     this.setState({
//     query: this.search.value
//     }, () => {
//     // if (this.state.query && this.state.query.length > 1) {
//     //     if (this.state.query.length === 0) {
//     //     this.getRecipeItem()
//     //     }
//     // } else if (!this.state.query) {
//     // }
//     })
// }

// handleSubmit = (event) => {
//     event.preventDefault();
//     this.getRecipeItem();
// }

render() {
    console.log(this.state.results)
    
    return (
        <>
    <div className="card-body">
    {this.state.results.map(item=>{
    return (
        <>
    <ul key={item.id}>
    <h5 className="card-title">{item.name}</h5>
    <li className="card-text">{item.directions}</li>
    <li className="card-text">{item.cook}</li>
    <li className="card-text">{item.prep}</li>
    <li className="card-text">{item.readyIn}</li>
    <li className="card-text">{item.calories}</li>
    <li className="card-text">{item.rating}</li>
    <li className="card-text">{item.ingredients}</li>
    </ul>
    </>
    )
    })} 
    </div>
    </>
    )
}
}

export default Select



