import React from 'react';
import { useState } from 'react';
import { BooksCategory } from '../../components/BooksCategory/BooksCategory.component';
import { Header } from '../../components/Header/Header.component';
import { HeroCarousel } from '../../components/HeroCarousel/HeroCarousel.component';

export const Books = () => {

  const [categoryCard, setCategoryCard] = useState([]);


  return (
    <>
      <Header />
      <HeroCarousel setCategoryCard={setCategoryCard}   />
      <BooksCategory categoryCard={categoryCard} setCategoryCard={setCategoryCard}  />
    </>
  ) 
}
