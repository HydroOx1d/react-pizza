import React from 'react';
import {Container} from '../uikit/index';
import styled from "styled-components";
import {ReactComponent as Icon} from '../../assets/pizza/plus.svg'
import pizzaImg from '../../assets/pizza/pizza-img.png'

const PizzaListSC = styled.div``
const PizzaListTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.01em;
  margin: 35px 0;
`
const PizzaListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 65px;
  column-gap: 55px;
`
const PizzaItem = styled.div`
  max-width: 280px;
`
const PizzaItemIblock = styled.div`
  max-width: 259px;
  overflow: hidden;
`
const PizzaItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`
const PizzaItemTitle = styled.h3`
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 0.01em;
  margin-bottom: 20px;
  text-align: center;
`
const PizzaKinds = styled.div`
  padding: 7px 5px;
  background: #F3F3F3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;

`
const PizzaKindsButtonsTop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`
const PizzaKindsButtonsBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`
type PizzaKindsButtonType = {
  smallPadding?: boolean;
}
const PizzaKindsButton = styled.button<PizzaKindsButtonType>`
  border: none;
  background: transparent;
  padding: ${props => props.smallPadding ? '10px 15px' : '10px 30px'};
  border-radius: 5px;
  transition: .3s ease-in-out;
  cursor: pointer;

  :hover {
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  }
`
const PizzaItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const PizzaItemPrice = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.015em;
`
const PizzaItemBottomButton = styled.button`
  border: 1px solid #EB5A1E;
  border-radius: 30px;
  background: #EB5A1E;
  transition: .3s ease-in-out;
  padding: 11px 20px;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 8px;
  :hover {
    background: #fff;
    color: #EB5A1E;
    svg{
      fill: #EB5A1E;
    }
  }
`
const IconSC = styled(Icon)`
  fill: #fff;
  transition: .3s ease-in-out;
`
const PizzaList = () => {
  const pizzaItems = [
    {id: 1, name: 'Чизбургер-пицца', price: 395},
    {id: 2, name: 'Чизбургер-пицца', price: 395},
    {id: 3, name: 'Чизбургер-пицца', price: 395},
    {id: 4, name: 'Чизбургер-пицца', price: 395},
    {id: 5, name: 'Чизбургер-пицца', price: 395},
    {id: 6, name: 'Чизбургер-пицца', price: 395},
    {id: 7, name: 'Чизбургер-пицца', price: 395},
    {id: 8, name: 'Чизбургер-пицца', price: 395},
  ]

  return (
    <>
      <PizzaListSC>
        <Container>
          <PizzaListTitle>Все пиццы</PizzaListTitle>
          <PizzaListGrid>
            {pizzaItems.map((pizza) => (
              <PizzaItem key={pizza.id}>
                <PizzaItemIblock>
                  <PizzaItemImg src={pizzaImg}/>
                </PizzaItemIblock>
                <PizzaItemTitle>{pizza.name}</PizzaItemTitle>
                <PizzaKinds>
                  <PizzaKindsButtonsTop>
                    <PizzaKindsButton>тонкое</PizzaKindsButton>
                    <PizzaKindsButton>традиционное</PizzaKindsButton>
                  </PizzaKindsButtonsTop>
                  <PizzaKindsButtonsBottom>
                    <PizzaKindsButton smallPadding>26 см.</PizzaKindsButton>
                    <PizzaKindsButton smallPadding>30 см.</PizzaKindsButton>
                    <PizzaKindsButton smallPadding>40 см.</PizzaKindsButton>
                  </PizzaKindsButtonsBottom>
                </PizzaKinds>
                <PizzaItemBottom>
                  <PizzaItemPrice>от {pizza.price} ₽</PizzaItemPrice>
                  <PizzaItemBottomButton>
                    <IconSC className='icon'/>
                    Добавить
                  </PizzaItemBottomButton>
                </PizzaItemBottom>
              </PizzaItem>
            ))}
          </PizzaListGrid>
        </Container>
      </PizzaListSC>
    </>
  );
};

export default PizzaList;
