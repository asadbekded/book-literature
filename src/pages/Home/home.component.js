import React, { useState } from "react";
import { Category } from "../../components/Category/Category.component";
import { Header } from "../../components/Header/Header.component";
import { HomeCarousel } from "../../components/HomeCarousel/HomeCarousel.component";

export const Home = () => {

  const [categoryCard, setCategoryCard] = useState([]);

  return (
    <>
      <Header />
      <HomeCarousel setCategoryCard={setCategoryCard} />
      <Category categoryCard={categoryCard} setCategoryCard={setCategoryCard} />
    </>
  );
};
