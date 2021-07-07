import React from 'react';
import PropTypes from 'prop-types';
import DrinksCard from './DrinksCard';

function DrinksList({ data, categories }) {
  return (
    <main>
      <header>
        { categories.map(({ strCategory }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>
        ))}
      </header>
      <section>
        <div data-testid="drinks-list" className="class-drinks-list">
          {
            data.map((drink, index) => <DrinksCard key={ index } drink={ drink } />)
          }
        </div>
      </section>
    </main>
  );
}

DrinksList.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.object,
}.isRequired;

export default DrinksList;
