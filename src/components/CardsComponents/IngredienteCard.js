import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../../styles/Card.css';

function IngredienteCard({ index, strName, strThumb, page }) {
  const history = useHistory();
  return (
    <button
      className="card"
      type="button"
      data-testid={ `${index}-ingredient-card` }
      onClick={ () => history.push(
        `/${page}`,
        {
          ingredientName: strName },

      ) }
    >
      <img
        className="card-img"
        src={ strThumb }
        data-testid={ `${index}-card-img` }
        alt="foto da receita"
      />
      <h4 data-testid={ `${index}-card-name` }>{ strName }</h4>
    </button>
  );
}

IngredienteCard.propTypes = {
  index: PropTypes.number.isRequired,
  strName: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default IngredienteCard;
