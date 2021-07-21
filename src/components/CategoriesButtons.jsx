import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CategoriesButtons({ categories, toggleCategory }) {
  const maxLength = 4;
  const [checked, setChecked] = useState('');
  const checkedStyle = (ev) => {
    const label = ev.target.parentNode;
    if (ev.target.checked) {
      label.style.backgroundColor = '#54e3a7';
      label.style.border = '2px solid #2e7d5c';
      label.style.color = '#436356';
    }
    const inputs = document.getElementsByClassName('category-button');
    Object.values(inputs).forEach((input) => {
      const inputLabel = input.parentNode;
      if (!input.checked) {
        inputLabel.style.backgroundColor = '#2e7d5c';
        inputLabel.style.border = '2px solid #54e3a7';
        inputLabel.style.color = '#9be8c8';
      }
    });
  };
  function toggle(ev) {
    if (checked === ev.target.id) {
      ev.target.checked = false;
      setChecked('');
      toggleCategory('');
    }
  }

  return (
    <form>
      <label
        htmlFor="category-button"
        className="category-form"
        onChange={ (ev) => {
          setChecked(ev.target.id);
          return toggleCategory(ev.target.value);
        } }
      >
        { categories
          .filter((_, index) => index <= maxLength)
          .map((category, index) => (
            <label key={ index } htmlFor={ index } className="category-label">
              <input
                id={ index }
                onChange={ (ev) => checkedStyle(ev) }
                type="radio"
                name="category-button"
                className="category-button"
                value={ category.strCategory }
                data-testid={ `${category.strCategory}-category-filter` }
                onClick={ toggle }
              />
              { category.strCategory }
            </label>
          )) }
        <label htmlFor="5" className="category-label">
          <input
            id="5"
            onChange={ (ev) => checkedStyle(ev) }
            type="radio"
            name="category-button"
            className="category-button"
            value=""
            data-testid="All-category-filter"
            onClick={ toggle }
          />
          All
        </label>
      </label>
    </form>
  );
}

CategoriesButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  toggleCategory: PropTypes.func,
}.isRequired;
