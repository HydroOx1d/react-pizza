import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, Flex } from '../uikit';
import Logo from '../../assets/header/logo.png';
import Basket from '../../assets/header/basket.svg';
import Search from './Search';

const HeaderSC = styled.header`
  padding: 50px 0px 50px 0px;
`

const HeaderFlex = styled(Flex)`
  @media(max-width: 576px) {
    flex-direction: column;
  }
`

const HeaderLogoSC = styled(Flex)`
  @media (max-width: 576px) {
   margin: 0px 0px 20px 0px; 
  }
`

const HeaderLogoImage = styled.img`
  width: 38px;
  height: 38px;
  margin: 0px 20px 0px 0px;
`

const HeaderLogoContent = styled.div`
  
`

const HeaderLogoTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: calc(30 / 24 * 100%);
  color: #181818;
`

const HeaderLogoSubtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  color: #7b7b7b;
  max-width: 150px;
`

const HeaderBasket = styled(Flex)`
  cursor: pointer;
  background: #fe5f1e;
  border-radius: 30px;
  color: #ffffff;
  padding: 13px 23px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
`;

const HeaderBasketSum = styled.div`
  border-right: 1px solid #ffffff40;
  padding: 0px 13px 0px 0px;
  margin: 0px 13px 0px 0px;
`;

const HeaderBasketCount = styled(Flex)`
  
`

const HeaderBasketIcon = styled.img`
  margin: 0px 8px 0px 0px;
`

const HeaderBasketNum = styled.div`
  
`

const Header = () => {
  return (
    <HeaderSC>
      <Container>
        <HeaderFlex align="center" justify='space-between'>
          <Link to="/">
            <HeaderLogoSC align="center">
              <HeaderLogoImage src={Logo} alt="logo" />
              <HeaderLogoContent>
                <HeaderLogoTitle>REACT PIZZA</HeaderLogoTitle>
                <HeaderLogoSubtitle>
                  самая вкусная пицца во вселенной
                </HeaderLogoSubtitle>
              </HeaderLogoContent>
            </HeaderLogoSC>
          </Link>
          <Search/>
          <Link to="/cart">
            <HeaderBasket align='center'>
              <HeaderBasketSum>520 ₽</HeaderBasketSum>
              <HeaderBasketCount align='center'>
                <HeaderBasketIcon src={Basket} />
                <HeaderBasketNum>3</HeaderBasketNum>
              </HeaderBasketCount>
            </HeaderBasket>
          </Link>
        </HeaderFlex>
      </Container>
    </HeaderSC>
  );
}

export default Header