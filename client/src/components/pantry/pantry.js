import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './../recipeSearch/recipe';
import pantry from './pantry.scss';

class Pantry extends Component {
constructor () {
super ();
this.state = {
    pantry: [],
    }
}
getPantryItem = () => {
axios.get(`http://localhost:5000/pantry`)
.then((response)=> {
    const data= response.data.pantryData;
    this.setState({ pantry: data});
    console.log('Pantry received')
})
.catch(() => {
    console.log('Error retrieving pantry')
});
}
componentDidMount=()=>{
    this.getPantryItem();
}

render() {
return (
    <>
    <div className="pantry__recipe">
    <h2>Your Current Pantry</h2>
    {this.state.pantry.map(item =>{
    return (
    <>
    <div key={item.id}>
    <div className="pantry__recipe__box">
        
    <h5 className="recipe__title">{item.name}</h5>
    </div>
    </div>
        </>
        )
        })}
        </div> 
    </>
   );
    }
}
export default Pantry;