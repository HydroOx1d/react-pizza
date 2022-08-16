import React from "react";
import { Container } from "../uikit/index";
import styled from "styled-components";
import PizzaItem from "./PizzaItem/PizzaItem";
import PizzaSkeleton from "../pizaa-skeletor/PizzaSkeleton";

const PizzaListSC = styled.section``;

const PizzaListTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.01em;
  margin: 35px 0;
`;
const PizzaListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 65px;
  column-gap: 55px;
`;

interface PizzasType {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

const PizzaList = () => {
  const [pizzas, setPizzas] = React.useState<PizzasType[]>([]);
  const [pizzasIsLoading, setPizzasIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://62f9d53b3c4f110faa8d7bce.mockapi.io/pizzas/pizzas')
      .then(res => res.json())
      .then(pizzas => {
        setPizzas(pizzas);
        setPizzasIsLoading(false);
      })
  }, [])

  return (
    <PizzaListSC>
      <Container>
        <PizzaListTitle>Все пиццы</PizzaListTitle>
        <PizzaListGrid>
          {
            pizzasIsLoading
              ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
          }
        </PizzaListGrid>
      </Container>
    </PizzaListSC>
  );
};

export default PizzaList;
