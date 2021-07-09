import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderRecipes from './context/ProviderRecipes';
import ByIngredients from './screens/ByIngredients';
import ByOrigin from './screens/ByOrigin';
import Detail from './screens/Detail';
import Explore from './screens/Explore';
import ExploreFilters from './screens/ExploreFilters';
import Favorites from './screens/Favorites';
import InProcess from './screens/InProcess';
import Login from './screens/Login';
import MadeRecipes from './screens/MadeRecipes';
import MainFood from './screens/MainFood';
import MainDrink from './screens/MainDrink';
import NotFound from './screens/NotFound';
import Profile from './screens/Profile';

function App() {
  return (
    <BrowserRouter>
      <ProviderRecipes>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ MainFood } />
          <Route exact path="/bebidas" component={ MainDrink } />
          <Route path="/comidas/:id" component={ Detail } />
          <Route path="/bebidas/:id" component={ Detail } />
          <Route path="/comidas/:id/in-progress" component={ InProcess } />
          <Route path="/bebidas/:id/in-progress" component={ InProcess } />
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFilters } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ByIngredients }
          />
          <Route exact path="/explorar/bebidas" component={ ExploreFilters } />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ByIngredients }
          />
          <Route path="/explorar/comidas/area" component={ ByOrigin } />
          <Route path="/perfil" component={ Profile } />
          <Route path="/receitas-feitas" component={ MadeRecipes } />
          <Route path="/receitas-favoritas" component={ Favorites } />
          <Route component={ NotFound } />
        </Switch>
      </ProviderRecipes>
    </BrowserRouter>
  );
}

export default App;
