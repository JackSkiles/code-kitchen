import React from 'react';
import './App.css';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Recipes}/>
          <Route path="/recipes/new" exact component={RecipeForm}/>
          <Route path="/recipes/:id" component={RecipeDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
