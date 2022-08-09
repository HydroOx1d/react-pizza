import React from "react";
import styled from "styled-components";
import { Container } from "../uikit";
import { Flex } from "../uikit/index";
import Categories from "./categories/Categories";
import Sort from "./sort/Sort";

const FilterWrap = styled.div``;

const Filter = () => {
  return (
    <FilterWrap>
      <Container>
        <Flex justify="space-between">
          <Categories />
          <Sort />
        </Flex>
      </Container>
    </FilterWrap>
  );
};

export default Filter;
