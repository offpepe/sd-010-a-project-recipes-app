import React, { useState, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

export const DetailsContext = createContext({});
const MAX_LENGTH = 6;

function DetailsContextProvider({ children }) {
  const [recipeData, setRecipe] = useState({}); // a receita da pg detalhes
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [recommendations, setRecomendations] = useState([]);

  const handleFetch = useCallback(async (url, type) => {
    try {
      const request = await fetch(url);
      const data = await request.json();
      if (data) setRecipe(data[type][0]);
      console.log(data[type][0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchMealRecipes = useCallback(async (endpoint, type) => {
    // const currRecomendation = type === 'meals' ? 'drinks' : 'meals';
    let currentRecommendation = '';
    if (type === 'meals') currentRecommendation = 'drinks';
    if (type === 'drinks') currentRecommendation = 'meals';
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const formattingData = {
        ...data,
        [currentRecommendation]: data[currentRecommendation].slice(0, MAX_LENGTH),
      };
      if (formattingData[currentRecommendation] !== null) {
        setRecomendations(formattingData[currentRecommendation]);
      }
      console.log(formattingData[currentRecommendation]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const contextValue = {
    handleFetch,
    isLoading,
    recipeData,
    currentImage,
    recommendations,
    fetchMealRecipes,
  };

  return (
    <DetailsContext.Provider value={ contextValue }>
      { children }
    </DetailsContext.Provider>
  );
}

export default DetailsContextProvider;

DetailsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
