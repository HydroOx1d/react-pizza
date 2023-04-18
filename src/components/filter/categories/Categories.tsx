import React from "react";
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
  
  @media(max-width: 920px) {
    width: 100%;
    max-width: 700px;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 0;
    }
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categoriesList: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];


  const onSetCategoryType = (index: number) => {
    setActiveCategory(index);
    setSearchParams({
      sortBy: searchParams.get('sortBy') || '',
      order: searchParams.get('order') || '',
      category: String(index || '')
    })
  }

  return (
    <CategoriesWrap>
      {categoriesList.map((category, index) => {
        const idx = searchParams.get('category') === null ? activeCategory : Number(searchParams.get('category'))
        return (
          <Category
            key={index}
            active={index === idx}
            onClick={() => onSetCategoryType(index)}
          >
            {category}
          </Category>
        )
      })}
    </CategoriesWrap>
  );
};

export default Categories;
