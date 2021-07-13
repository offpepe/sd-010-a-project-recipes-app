import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, dataTestid }) {
  return (
    <button
      data-testid={ `${dataTestid}` }
      type="button"
      style={ { position: 'fixed', bottom: '0px' } }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};
