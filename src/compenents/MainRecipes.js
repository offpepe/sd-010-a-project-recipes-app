import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchbarContext from '../contexts/SearchbarContext';
import DrinkCards from './DrinkCards';
import MealCards from './MealCards';
import RecipesContext from '../contexts/RecipesContext';
import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';

function MainRecipes() {
  const [renderRecipes, setRenderRecipes] = useState([]);
  const { searchBtn } = useContext(SearchbarContext);
  const {
    type, recipes, searchedRecipes, mealsAndDrinkByIngredients,
  } = useContext(RecipesContext);

  useEffect(() => {
    console.log('Entra ai');
    if (recipes) setRenderRecipes(recipes);
    if (mealsAndDrinkByIngredients) setRenderRecipes(mealsAndDrinkByIngredients);
    if (searchedRecipes) setRenderRecipes(searchedRecipes);
  }, [recipes]);

  console.log(mealsAndDrinkByIngredients);

  return (
    <>
      { searchBtn ? <SearchBar /> : <FilterButtons /> }
      <section className="recipes-container">
        { type === 'meal' ? renderRecipes.map((recipe, index) => (
          <MealCards
            data={ recipe }
            index={ index }
            key={ recipe.idMeal }
          />
        )) : renderRecipes.map((recipe, index) => (
          <DrinkCards
            data={ recipe }
            index={ index }
            key={ recipe.idDrink }
          />
        ))}
      </section>
    </>
  );
}

MainRecipes.propTypes = {
  categories: PropTypes.array,
  recipes: PropTypes.array,
  handleFilter: PropTypes.func,
}.isRequired;

export default MainRecipes;
