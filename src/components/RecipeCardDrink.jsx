import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function RecipeCardDrink({
  drink: {
    idDrink, strDrink, strDrinkThumb }, index }) {
  return (
    <Link to={ `/bebidas/${idDrink}` }>
      <Card
        className="recipe-card"
        data-testid={ `${index}-recipe-card` }
      >
        <Card.Img
          src={ strDrinkThumb }
          alt=""
          data-testid={ `${index}-card-img` }
        />
        <Card.Body style={ { height: '50px' } }>
          <p
            data-testid={ `${index}-card-name` }
          >
            { strDrink }
          </p>
        </Card.Body>
      </Card>
    </Link>
  );
}

RecipeCardDrink.propTypes = {
  drink: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;
