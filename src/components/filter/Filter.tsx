import React from "react";
import styled from "styled-components";
import { Container } from "../uikit";
import { Flex } from "../uikit/index";
import Categories from "./categories/Categories";
import Sort from "./sort/Sort";

const FilterWrap = styled.section``;

const FilterFlex = styled(Flex)`
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Filter = () => {
  return (
    <FilterWrap>
      <Container>
        <FilterFlex justify="space-between">
          <Categories />
          <Sort />
        </FilterFlex>
      </Container>
    </FilterWrap>
  );
};

export default Filter;
