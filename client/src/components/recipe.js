import React from "react";

const Recipe = (props) => {
    console.log(props.list.image)
    return(
    <div className="card-body">
    {props.list.map(item=>{
    return (
        <>
    <ul key={item.id}>
    <h5 className="card-title">{item.name}</h5>
    <img 
        src={item.image.toString()}
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