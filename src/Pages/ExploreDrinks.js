import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PagesCss/Explore.css';

function ExploreDrinks() {
  const history = useHistory();
  return (
    <>
      <Header props={ { search: false, title: 'Explorar Bebidas' } } />
      <main className="main-container">
        <section className="main-explore">
          <Button
            variant="light"
            size="lg"
            className="buttons"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push('/explorar/bebidas/ingredientes') }
          >
            Por Ingredientes
          </Button>
          <Button
            variant="light"
            size="lg"
            className="buttons"
            data-testid="explore-surprise"
            onClick={ () => history.push('/explorar/bebidas') }
          >
            Me Surpreenda!
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
