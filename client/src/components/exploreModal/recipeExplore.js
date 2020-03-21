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
    <div className="card">
    {this.props.list.map(item=>{
    return (
    <>
    <ul key={item.id}>
    <h5 className="card__title">{item.name}</h5>
    <Img
    className='photo__container'
    src={[item.image.toString(), 'https://svg-clipart.com/svg/food/P9kLlld-food-not-bombs-logo-vector.svg']}
    alt="food-photo"
    />
    <li className="card__text"><p>Ingredients:</p>{item.ingredients}</li>
    <li className="card__text"><p>Prep Time:</p>{item.prep}</li>
    <li className="card__text"><p>Cook Time:</p>{item.cook}</li>
    <li className="card__text"><p>Countdown 'till Nom:</p>{item.readyIn}</li>
    <li className="card__text"><p>Directions:</p>{item.directions}</li>
    <li className="card__text"><p>Cals:</p>{item.calories}</li>
    <li className="card__text"><p>Rating:</p>{item.rating}</li>
    
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