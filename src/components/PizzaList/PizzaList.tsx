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

const PizzaListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -20px -30px;
`

const PizzaListColumn = styled.div`
  flex: 0 1 25%;
  padding: 0px 20px;
  margin: 0px 0px 30px 0px;
  @media(max-width: 1200px) {
   flex: 0 1 33.3333%; 
  }
  @media(max-width: 920px) {
    flex: 0 1 50%;
  }
  @media(max-width: 620px) {
    flex: 0 1 100%;
  }
`

const PizzaList = () => {
  const [searchParams] = useSearchParams();
  const pizzas = useSelector((state: AppStateType) => state.pizzas.pizzas);
  const pizzasIsLoading = useSelector((state: AppStateType) => state.pizzas.pizzasIsLoading);

  const dispatch = useDispatch<AppDispatchType>();

  const getPizzasQueryParams: IGetPizzasQueryParams = {
    sortBy: searchParams.get('sortBy') || "",
    order: searchParams.get('order') || "",
    category: searchParams.get('category') || ""
  }

  React.useEffect(() => {
    dispatch(getPizzas(getPizzasQueryParams))
  }, [getPizzasQueryParams.sortBy, getPizzasQueryParams.order, getPizzasQueryParams.category])

  return (
    <PizzaListSC>
      <Container>
        <PizzaListTitle>Все пиццы</PizzaListTitle>
        {/* <PizzaListGrid>
          {
            pizzasIsLoading
              ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas?.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
          }
        </PizzaListGrid> */}
        <PizzaListBlock>
          {
            pizzasIsLoading
              ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas?.map((pizza) => (
                <PizzaListColumn>
                  <PizzaItem key={pizza.id} {...pizza}/>
                </PizzaListColumn>
              ))
          }
        </PizzaListBlock>
      </Container>
    </PizzaListSC>
  );
};

export default PizzaList;
