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
    <div className="card-body">
    {this.props.list.map(item=>{
    return (
    <>
    <ul key={item.id}>
    <h5 className="card-title">{item.name}</h5>
    <Img
    className='photo__container'
    src={[item.image.toString(), 'https://i.kym-cdn.com/entries/icons/facebook/000/006/428/637738.jpg']}
    alt="food-photo"
    />
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
    </ReactModal>
);
}
}

export default RecipeExploreModal;