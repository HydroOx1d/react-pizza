import React from "react";
import { Container } from "../uikit/index";
import styled from "styled-components";
import PizzaItem from "./PizzaItem/PizzaItem";
import pizzas from "../../db.json";

const PizzaListSC = styled.div``;
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

const PizzaList = () => {
  return (
    <>
      <PizzaListSC>
        <Container>
          <PizzaListTitle>Все пиццы</PizzaListTitle>
          <PizzaListGrid>
            {pizzas.map((pizza) => (
              <PizzaItem key={pizza.id} {...pizza} />
            ))}
          </PizzaListGrid>
        </Container>
      </PizzaListSC>
    </>
  );
};

export default PizzaList;
