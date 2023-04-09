import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const CategoriesWrap = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin: 0px 8px 0px 0px;
  }
`;

type FilterItemType = {
  active?: boolean;
};

const Category = styled.li<FilterItemType>`
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  padding: 0px 30px;
  min-height: 46px;
  background-color: ${(props) => (props.active ? "#282828" : "#F9F9F9")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  color: ${(props) => (props.active ? "#ffffff" : "#2C2C2C")};
  transition: all 100ms ease-in;
`;

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriesList: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  useEffect(() => {
    setSearchParams({ 
      sortBy: searchParams.get('sortBy') || '',
      order: searchParams.get('order') || '',
      category: String(activeCategory || '')
    })
  }, [activeCategory])

  return (
    <CategoriesWrap>
      {categoriesList.map((category, index) => (
        <Category
          key={index}
          active={activeCategory === index}
          onClick={() => setActiveCategory(index)}
        >
          {category}
        </Category>
      ))}
    </CategoriesWrap>
  );
};

export default Categories;
