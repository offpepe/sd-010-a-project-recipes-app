import { object } from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { btn } from '../styles/login';

const indexMock = 0;

function DetalheReceitaComida({ props: { meals } }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const {
    strMeal,
    strCategory,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strYoutube,
    strMealThumb,
  } = meals[0];

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
  ];

  console.log(strYoutube);

  return (
    <>
      <img alt="Produto" data-testid="recipe-photo" src={ strMealThumb } />

      <h2 data-testid="recipe-title">{ strMeal }</h2>

      <div>
        <button type="button" data-testid="share-btn">
          <img alt="Share link" src={ shareIcon } />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img alt="Favorite button" src={ whiteHeartIcon } />
        </button>
      </div>

      <p data-testid="recipe-category">{ strCategory }</p>

      <ul>
        { ingredients.map((igredient, index) => (
          <li
            key={ igredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { igredient }
          </li>))}
        {/* Map aqui */}
      </ul>

      <p data-testid="instructions">{ strInstructions }</p>

      <iframe data-testid="video" width="320" height="240" src="https://www.youtube.com/embed/VVnZd8A84z4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />

      {/* <div data-testid={ `${index}-recomendation-card` }>
        Card Receitas Recomendadas
      </div> */}

      <div data-testid={ `${indexMock}-recomendation-card` }>
        Card Receitas Recomendadas
      </div>

      <Button
        variant="success"
        type="button"
        onClick={ handleClick }
        data-testid="start-recipe-btn"
        className={ btn }
      >
        Start recipe
      </Button>
    </>
  );
}

DetalheReceitaComida.propTypes = {
  props: object,
}.isRequired;

export default DetalheReceitaComida;
