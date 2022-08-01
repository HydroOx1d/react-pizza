import React from 'react'
import styled from 'styled-components';
import { Container, Flex } from '../uikit';
import Logo from '../../assets/header/logo.png'

const HeaderSC = styled.header`
  padding: 50px 0px 50px 0px;
`

const HeaderLogoSC = styled(Flex)`
  
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
`

const Header = () => {
  return (
    <HeaderSC>
      <Container>
        <Flex align='center'>
          <HeaderLogoSC align='center'>
            <HeaderLogoImage src={Logo} alt="logo"/>
            <HeaderLogoContent>
              <HeaderLogoTitle>REACT PIZZA</HeaderLogoTitle>
              <HeaderLogoSubtitle>самая вкусная пицца во вселенной</HeaderLogoSubtitle>
            </HeaderLogoContent>
          </HeaderLogoSC>
        </Flex>
      </Container>
    </HeaderSC>
  )
}

export default Header