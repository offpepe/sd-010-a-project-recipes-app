import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function RecipeCardFood({
  meal: { idMeal, strMeal, strMealThumb }, index }) {
  return (
    <Link to={ `/comidas/${idMeal}` }>
      <Card
        className="recipe-card"
        data-testid={ `${index}-recipe-card` }
      >
        <Card.Img
          src={ strMealThumb }
          alt=""
          data-testid={ `${index}-card-img` }
        />
        <Card.Body style={ { height: '50px' } }>
          <p
            data-testid={ `${index}-card-name` }
          >
            { strMeal }
          </p>
        </Card.Body>
      </Card>
    </Link>
  );
}

RecipeCardFood.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;
