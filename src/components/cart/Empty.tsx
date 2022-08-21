import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../uikit/index';
import ShoppingCart from '../../assets/cart/shopping-cart-colour.svg';

const Wrap = styled.div``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 0px 50px;
  & > *:last-child {
    margin-bottom: 0px;
  }
`

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: calc(38 / 32 * 100%);
  margin: 0px 0px 10px 0px;
`

const Desc = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: calc(26 / 18 * 100%);
  color: #777777;
  margin: 0px 0px 47px 0px;
`

const Image = styled.img`
  width: 300px;
  height: 255px;
  margin: 0px 0px 74px 0px;
`

const Button = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 46px;
  background-color: #282828;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  color: #ffffff;
  padding: 0 40px;
  text-decoration: none;
  margin: 0px 0px 20px 0px;
`

const Empty = () => {
  return (
    <Wrap>
      <Container maxWwidth='547'>
        <Content>
          <Title>Корзина пустая</Title>
          <Desc>Вероятней всего, вы не заказывали ещё пиццу.Для того, чтобы заказать пиццу, перейди на главную страницу.</Desc>
          <Image src={ShoppingCart} alt="Shopping Cart"/>
          <Button to="/">Вернутся назад</Button>
        </Content>
      </Container>
    </Wrap>
  )
}

export default Empty