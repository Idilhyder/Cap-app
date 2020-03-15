import React from "react";

const Recipe = props => {

    return(
    <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.directions}</p>
    </div>
);
}

export default Recipe;