import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from 'react-redux';

import { Container } from "../uikit/index";
import PizzaItem from "./PizzaItem/PizzaItem";
import PizzaSkeleton from "../pizaa-skeletor/PizzaSkeleton";
import { getPizzas } from "../../store/slices/pizzas";
import { AppDispatchType, AppStateType } from '../../store/index';
import { useSearchParams } from "react-router-dom";
import { IGetPizzasQueryParams } from '../../types/index';

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

const PizzaList = () => {
  const [searchParams] = useSearchParams();
  const pizzas = useSelector((state: AppStateType) => state.pizzas.pizzas);
  const pizzasIsLoading = useSelector((state: AppStateType) => state.pizzas.pizzasIsLoading);

  const dispatch = useDispatch<AppDispatchType>();

  const getPizzasQueryParams: IGetPizzasQueryParams = {
    sortBy: searchParams.get('sortBy'),
    order: searchParams.get('order'),
    category: searchParams.get('category')
  }

  React.useEffect(() => {
    dispatch(getPizzas(getPizzasQueryParams))
  }, [getPizzasQueryParams.sortBy, getPizzasQueryParams.order, getPizzasQueryParams.category])

  return (
    <PizzaListSC>
      <Container>
        <PizzaListTitle>Все пиццы</PizzaListTitle>
        <PizzaListGrid>
          {
            pizzasIsLoading
              ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas?.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
          }
        </PizzaListGrid>
      </Container>
    </PizzaListSC>
  );
};

export default PizzaList;
