import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

import ShareImage from '../images/shareIcon.svg';

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

function FinishedRecipies() {
  return (
    <div>
      <Header />
      <Container>
        <Filters>
          <Button data-testid="filter-by-all-btn">All</Button>
          <Button data-testid="filter-by-food-btn">Food</Button>
          <Button data-testid="filter-by-drink-btn">Drinks</Button>
        </Filters>
        {
          doneRecipes.map((recipe, index) => (
            <CardRecipe key={ index }>
              <ImageRecipe>
                <Image data-testid={ `${index}-horizontal-image` } src={ recipe.image } />
              </ImageRecipe>
              <ContentRecipe>
                <TextCategory data-testid={ `${index}-horizontal-top-text` }>
                  { `${recipe.area} - ${recipe.category}` }
                </TextCategory>
                <TextName data-testid={ `${index}-horizontal-name` }>
                  { recipe.name }
                  <ShareIcon>
                    <Image
                      data-testid={ `${index}-horizontal-share-btn` }
                      src={ ShareImage }
                    />
                  </ShareIcon>
                </TextName>
                <TextDate data-testid={ `${index}-horizontal-done-date` }>
                  { recipe.doneDate }
                </TextDate>
                <Tags>
                  <ul>
                    {
                      recipe.tags.map((tagName, i) => (
                        <TextTag
                          key={ i }
                          data-testid={ `${index}-${tagName}-horizontal-tag` }
                        >
                          { tagName }
                        </TextTag>
                      ))
                    }
                  </ul>
                </Tags>
              </ContentRecipe>
            </CardRecipe>
          ))
        }
      </Container>
    </div>
  );
}

export default FinishedRecipies;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Filters = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 80px;
  height: 24px;
`;

const CardRecipe = styled.div`
  width: 90%;
  height: 180px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #f1f1f1;
`;

const ImageRecipe = styled.div`
  width: 35%;
  height: 100%;
`;

const ContentRecipe = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const TextCategory = styled.div`
  width: 80%;
`;

const TextName = styled.div`
  width: 80%;
`;

const TextDate = styled.div`
  width: 80%;
`;

const ShareIcon = styled.button`
  width: 26px;
  height: 26px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tags = styled.div`
  width: 80%;
`;

const TextTag = styled.li`
  color: red;
  display: inline;

  +li{
    margin-left: 5px;
  }
`;
