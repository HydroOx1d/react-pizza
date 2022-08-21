import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Minus } from '../../assets/cart/minus.svg';
import { ReactComponent as Plus } from '../../assets/cart/plus.svg';
import { ReactComponent as Delete } from '../../assets/cart/delete.svg';


const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #F4F4F4;
  &:first-child {
    border-top: 1px solid #F4F4F4;
  }
  &:last-child {
    border-bottom: none;
  }
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  &:not(:last-child) {
    margin: 0px 15px 0px 0px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: calc(27 / 22 * 100%);
  &:not(:last-child) {
    margin: 0px 0px 3px 0px;
  }
`

const Specifications = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(22 / 18 * 100%);
  color: #8D8D8D;
`

const Quantity = styled.div`
 display: flex;
 align-items: center;
  &:not(:first-child) {
    margin: 0px 0px 0px auto;
  }
`

const Count = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: calc(27 / 22 * 100%);
  margin: 0px 12px;
`

const Price = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: calc(27 / 22 * 100%);
  &:not(:last-child) {
    margin: 0px 93px 0px 93px;
  }
`

const CartItem = () => {
  return (
    <Wrap>
      <Image/>
      <Info>
        <Name>Сырный Цыплёнок</Name>
        <Specifications>
          <span>Тонкое тесто</span> {", "}
          <span>26 см</span>
        </Specifications>
      </Info>
      <Quantity>
        <Minus />
        <Count>2</Count>
        <Plus />
      </Quantity>
      <Price>770 Р</Price>
      <Delete/>
    </Wrap>
  )
}

export default CartItem