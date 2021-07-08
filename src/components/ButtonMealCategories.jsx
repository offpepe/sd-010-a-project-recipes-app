import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FoodContext from '../context/FoodContext';
import myContext from '../context/myContext';

function ButtonMealCategories() {
  const {
    mealCategories,
    fetchMealCategories,
    fetchMealFilterByCategory,
    btnToggled,
    setBtnToggled,
  } = useContext(FoodContext);

  const { setAuxRecipesFoods } = useContext(myContext);

  const [catchBtnFilter, setCatchBtnFilter] = useState('');

  const maxLength = 5;

  useEffect(() => {
    fetchMealCategories(); // botões na tela
    fetchMealFilterByCategory(catchBtnFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0, catchBtnFilter]);

  function handleClick(e) {
    setCatchBtnFilter(e.target.innerText);
    if (catchBtnFilter === e.target.innerText || !btnToggled) {
      setBtnToggled((initial) => !initial);
    }
    setAuxRecipesFoods([]);
  }

  return (
    <div className="btn-group">
      {
        mealCategories.slice(0, maxLength).map((category, index) => (
          <Button
            className="btns"
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ handleClick }
          >
            {category.strCategory}
          </Button>
        ))
      }
      <button
        className="btns"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setBtnToggled(false) }
      >
        All
      </button>
    </div>
  );
}

export default ButtonMealCategories;
