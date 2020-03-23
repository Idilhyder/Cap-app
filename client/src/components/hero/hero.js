import "./hero.scss";
import RecipeSearch from "./../recipeSearch/recipeSearch1";
import React from 'react';
import { Link } from 'react-router-dom';



const  Hero=()=> {

    return(
      <div className="hero">
        <div className="hero__description">
        <h1>What's in your Pantry?</h1>
        <h2>Select and update items from your pantry to find your next delicious meal.</h2>
      <Link to={`/selectMeals`} >
      <button className="hero__button">START COOKING</button>
        </Link>
      </div>
      <div className="hero__wrapper">
      <RecipeSearch/>
      </div>
    </div>
    )
  }
  
  
export default Hero;
