import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/uikit/index';

import { ReactComponent as Basket } from '../assets/cart/basket.svg';
import { ReactComponent as CartIcon } from '../assets/cart/cart.svg';
import CartItem from '../components/cart/CartItem';
import Empty from '../components/cart/Empty';

const CartWrap = styled.div``

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin: 0px 0px 30px 0px;
  }
`

const CartName = styled.div`
  display: flex;
  align-items: center;
`

const CartNameText = styled.div`
  margin: 0px 0px 0px 17px;
  font-weight: 700;
  font-size: 32px;
  line-height: calc(40 / 32 * 100%);
`

const Clear = styled.div`
  display: flex;
  align-items: center;
`

const ClearName = styled.div`
  margin: 0px 0px 0px 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  color: #B6B6B6;
`

const CartBody = styled.div``

const CartBottom = styled.div`
  margin: 10px 0px 0px 0px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  line-height: calc(27 / 22 * 100%);
  &:not(:last-child) {
    margin: 0px 0px 40px 0px;
  }
`

const TotalPizzas = styled.div`
  font-weight: 400;
  span {
    font-weight: 700;
  }
`

const TotalSum = styled.div`
  font-weight: 400;
  span {
    font-weight: 700;
    color: #FE5F1E;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 55px;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  color: #ffffff;
  background-color: #FE5F1E;
  padding: 0 40px;
  border-radius: 30px;
  border: none;
  &.outline {
    background: transparent;
    border: 1px solid #D3D3D3;
    color: #D3D3D3;
  }
`

function Cart() {
  return (
    <>
      {/* <CartWrap>
        <Container maxWwidth='821'>
          <CartHeader>
            <CartName>
              <Basket/>
              <CartNameText>Корзина</CartNameText>
            </CartName>
  
            <Clear>
              <CartIcon/>
              <ClearName>Очистить корзину</ClearName>
            </Clear>
          </CartHeader>
          <CartBody>
            <CartItem />
          </CartBody>
          <CartBottom>
            <Total>
              <TotalPizzas>Всего пицц: <span>3 шт.</span></TotalPizzas>
              <TotalSum>Сумма заказа: <span>999 Р</span></TotalSum>
            </Total>
            <Buttons>
              <Button className='outline'>Вернуться назад</Button>
              <Button>Оплатить сейчас</Button>
            </Buttons>
          </CartBottom>
        </Container>
      </CartWrap> */}

      <Empty/>
    </>
  );
}

export default Cart;
