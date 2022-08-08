import React from 'react';
import styled from 'styled-components';
import { Container } from '../uikit';
import { Flex } from '../uikit/index';
import Sort from './sort/Sort';

const FilterWrap = styled.div`

`;

const Filters = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin: 0px 8px 0px 0px;
  }
`;

type FilterItemType = {
  active?: boolean
};

const FilterItem = styled.li<FilterItemType>`
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  padding: 0px 30px;
  min-height: 46px;
  background-color: ${props => props.active ? "#282828" : "#F9F9F9"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  color: ${props => props.active ? '#ffffff' : '#2C2C2C'};
`

const Filter = () => {
  
  return (
    <FilterWrap>
      <Container>
        <Flex justify='space-between'>
          <Filters>
            <FilterItem active>Все</FilterItem>
            <FilterItem>Мясные</FilterItem>
            <FilterItem>Вегетарианская</FilterItem>
            <FilterItem>Гриль</FilterItem>
            <FilterItem>Острые</FilterItem>
            <FilterItem>Закрытые</FilterItem>
          </Filters>
          <Sort/>
        </Flex>
      </Container>
    </FilterWrap>
  )
}

export default Filter