import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

export default function FooterMenu() {
  return (
    <footer data-testid="footer">
      <div className="footer-content">
        <Link to="/bebidas">
          <button type="button">
            <img
              src={ drinkIcon }
              alt="drink Icon"
              data-testid="drinks-bottom-btn"
              className="footer-img"
            />
          </button>
        </Link>

        <Link to="/explorar">
          <button type="button">
            <img
              src={ exploreIcon }
              alt="explore Icon"
              data-testid="explore-bottom-btn"
              className="footer-img"
            />
          </button>
        </Link>

        <Link to="/comidas">
          <button type="button">
            <img
              src={ mealIcon }
              alt="meal Icon"
              data-testid="food-bottom-btn"
              className="footer-img"
            />
          </button>
        </Link>
      </div>
    </footer>
  );
}
