import React from "react";
import Img from 'react-image';
import "./recipe.scss";

const Recipe = (props) => {
    console.log(props)
    return(
    <div className="card-body">
    {props.list.map(item=>{
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
    
);
}

export default Recipe;