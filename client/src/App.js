import React, { Component } from 'react';
import Main from './pages/main';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar";
import SelectMeals from "./components/Meal-Selection/selectMeal";
import About from "./pages/about";
import PantryModal from './components/pantry/pantryModal';





class App extends Component {


  render() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route 
          exact path="/" 
          component ={Main}/>
        <Route 
          exact path="/selectMeals"
          component ={SelectMeals}/>
          <Route 
          exact path="/about"
          component={About}/>
    </Switch>
    </BrowserRouter>
    </>
  );
  }
}

export default App;
