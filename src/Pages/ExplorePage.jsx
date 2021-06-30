import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const ExplorePage = () => (
  <div>
    <Header title="Explorar" />
    <Link to="/explorar/comidas"><button type="button">Explorar Comidas</button></Link>
    <Link to="/explorar/bebidas"><button type="button">Explorar Bebidas</button></Link>
    <Footer />
  </div>
);

export default ExplorePage;
