import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

class MainCarousel extends Component {
    constructor() {
    super();
    this.state ={
        images: []
    }
    }
    getRecipeCarousal = () => {
    axios.get(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`)
    .then((response)=> {
        const data= response.data.meals;
        console.log(data)
        this.setState({ images: data});
        console.log('images received')
    })
    .catch(() => {
    console.log('Error retrieving images')
    });
    }
    componentDidMount (){
        this.getRecipeCarousal();
    }
    render() {
    return (
        <Carousel infiniteLoop autoPlay showArrows={true} showThumbs={false} showStatus={false}>    
            {this.state.images.map(val =>{
                return (
                <div >
                <img 
                key={val.idMeal}
                src={val.strMealThumb} 
                alt="meals"/>
                </div>
                )
            })}
        
    </Carousel>
    );
    }
}
export default MainCarousel;