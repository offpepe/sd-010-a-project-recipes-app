import React, { useContext, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import IngredienteCard from '../../../components/CardsComponents/IngredienteCard';
import ReceitasContext from '../../../contexts/ReceitasContext';

const INGREDIENT_LENGTH = 11;

function ExplorarBebidasPorIngrediente() {
  const { fetchApi, APIIngredientsDrink } = useContext(ReceitasContext);

  useEffect(() => {
    fetchApi('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', 'ingredientes-bebidas');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Explorar Ingredientes" displayButton={ false } />
      {
        APIIngredientsDrink && APIIngredientsDrink.drinks
          .filter((item, index) => index <= INGREDIENT_LENGTH)
          .map((item, index) => {
            console.log(item);
            return (
              <IngredienteCard
                key={ index }
                index={ index }
                strName={ item.strIngredient1 }
                strId={ index }
                page="ingredientes"
                strThumb={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
              />
            );
          })
      }
      <Footer />
    </>
  );
}

export default ExplorarBebidasPorIngrediente;
