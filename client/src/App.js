import React from 'react';
import Main from './pages/main';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar";
import SelectMeals from "./components/selectMeal";
import About from "./components/about/about"





function App ()  {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route 
          exact path="/" 
          component ={Main}/>
        <Route 
          exact path="/:id"
          component ={Main}/>
        <Route 
          exact path="/selectMeals"
          component ={SelectMeals}/>
          <Route 
          exact path="/about"
          component ={About}/>
    </Switch>
    </BrowserRouter>
    </>
  );

}

export default App;
