import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Cards';

function CardList({ list }) {
  const maxLength = 12;

  if (list.length > 1) {
    const arr = [];
    for (let index = 0; index < maxLength; index += 1) {
      const element = list[index];
      arr.push(element);
    }
    return (
      arr.map((recipie, index) => {
        if (recipie.strMeal !== undefined) {
          return (
            <Card
              index={ index }
              key={ index }
              strName={ recipie.strMeal }
              strThumb={ recipie.strMealThumb }
            />
          );
        } return (
          <Card
            index={ index }
            key={ index }
            strName={ recipie.strDrink }
            strThumb={ recipie.strDrinkThumb }
          />
        );
      }));
  }
  return (
    <Redirect
      to={ list[0].idMeal !== undefined
        ? (`/comidas/${list[0].idMeal}`)
        : (`/bebidas/${list[0].idDrink}`) }
    />
  );
}

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default CardList;
