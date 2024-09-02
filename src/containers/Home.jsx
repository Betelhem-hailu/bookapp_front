// src/pages/Home.jsx
import React from 'react';
import { About, Blog, Categories, Discount, Features, Footer, Header, Hero } from '../containers';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Categories />
      <Blog />
      <Discount />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
