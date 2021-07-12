import React from 'react';
import MenuFooter from '../../components/menuFooter/index';
import Header from '../../components/header/index';
import ButtonExplore from '../../components/buttonExplore';
import './Explore.css';

export default function Explore() {
  return (
    <div>
      <Header title="Explorar" isSearch={ false } />
      <div className="box-button-explore">
        <ButtonExplore
          title="Explorar Comidas"
          path="/explorar/comidas"
          dataTestId="explore-food"
        />
        <ButtonExplore
          title="Explorar Bebidas"
          path="/explorar/bebidas"
          dataTestId="explore-drinks"
        />
      </div>
      <MenuFooter />
    </div>
  );
}
