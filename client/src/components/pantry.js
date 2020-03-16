import React from "react";

const Pantry = props => {
console.log(props.item)
    return(
    <div className="card-body">    
    {props.items.map(item=>{
    return (
        <>
    <div key={item.id}/>
    <p className="card-title">{item.name}</p>
    </>
    )
    })} 
    </div>
);
}

export default Pantry;