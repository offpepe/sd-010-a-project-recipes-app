import React from 'react';

import FoodProgress from '../pages/FoodProgress';
import renderWithRouterAndContext from '../helper/tests/renderWithRouterAndContext';
import getTest from '../helper/tests/getTestInfo';

const { headerRenderTests, footerRenderTests } = getTest(
  '/comidas/:id/in-progress',
);
const { itDoesntRenderHeader } = headerRenderTests();
const { itDoesntRenderFooter } = footerRenderTests();

describe('FoodProgress screen', () => {
  describe('Check Header and Footer components', () => {
    it('doesnt render the Header and Footer on the FoodProgress screen', () => {
      const { queryByTestId } = renderWithRouterAndContext(<FoodProgress />);
      itDoesntRenderHeader(queryByTestId);
      itDoesntRenderFooter(queryByTestId);
    });
  });
});
