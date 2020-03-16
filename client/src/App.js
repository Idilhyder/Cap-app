import React from 'react';
import ReactDOM from "react-dom";
import Main from './pages/main';
import RecipeSearch from './components/recipeSearch1';
import {BrowserRouter, Switch, Route, Link, useParams} from "react-router-dom";
import Pantry from './components/pantry';





function App ()  {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route 
          exact path="/" 
          component ={Main}/>
        <Route 
          exact path="/pantry"
          component ={Pantry}/>
        <Route 
          exact path="/:id"
          component ={Main}/>
        <Route 
          exact path="/:query"
          component ={RecipeSearch}/>
    </Switch>
    </BrowserRouter>
    </>
  );

}

export default App;
