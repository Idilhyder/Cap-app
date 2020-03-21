import "./hero.scss";
import RecipeSearch from "./../recipeSearch/recipeSearch1";
import MainCarousel from "./../hero/carousel";
import React from 'react';

const  Hero=()=> {

    return(
      <div className="hero">
        <div className="hero__banner">
          <MainCarousel/>
      </div>
      <div className="hero__wrapper">
      <RecipeSearch/>
      </div>
    </div>
    )
  }
  
  
export default Hero;
