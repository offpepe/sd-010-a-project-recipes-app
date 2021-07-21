import React from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from '../../services/clipboardCopy';
import shareIcon from '../../images/shareIcon.svg';

import './shareBtnStyles.css';

export default function ShareBtn({ id, type }) {
  return (
    <div className="share-btn">
      <button
        type="button"
        onClick={ () => clipboardCopy(type, id) }
        data-testid="share-btn"
      >
        <img
          src={ shareIcon }
          alt="Share Icon"
        />
        <p id={ `copyMessage${id}` }> Compartilhar </p>
      </button>
    </div>
  );
}

ShareBtn.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
