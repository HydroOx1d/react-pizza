import React from 'react'

import Filter from '../components/filter/Filter';
import PizzaList from "../components/PizzaList/PizzaList";

const Home = () => {
  return (
    <>
      <Filter/>
      <PizzaList/>
    </>
  )
}

export default Home