import React, { Component } from 'react';
import ReactModal from 'react-modal';
import "./recipeExplore.scss";
import Img from 'react-image';



class RecipeExploreModal extends Component {
render() {
    console.log(this.props)
    
return(
    <ReactModal
    isOpen={this.props.isOpen}
    className="modal__explore overlay"
    onRequestClose={this.props.onRequestClose}
    appElement={document.getElementById('app')}
    >
    <div className="recipe">
    {this.props.list.map(item=>{
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
    </ReactModal>
);
}
}

export default RecipeExploreModal;