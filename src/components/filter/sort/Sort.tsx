import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../assets/sort/arrow-top.svg";

type ActiveElementType = {
  active: boolean;
};

const SortWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SortIcon = styled.img`
  &:not(:last-child) {
    margin: 0px 7px 0px 0px;
  }
`;

const SortName = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(18 / 14 * 100%);
  &:not(:last-child) {
    margin: 0px 8px 0px 0px;
  }
`;

const SortType = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const SortCurrentType = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14 * 100%);
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
`;

const SortTypeDropdown = styled.div<ActiveElementType>`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  height: ${(props) => (props.active ? "auto" : "0")};
  width: ${(props) => (props.active ? "100%" : "0")};
  transition: all 0.1s ease-in-out;

  position: absolute;
  top: 25px;
  left: -100px;
  min-width: 132px;
  min-height: 136px;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
`;
const SortTypeDropdownList = styled.ul`
  list-style: none;
  padding: 11px 0;
`;
const SortTypeDropdownItem = styled.li`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14 * 100%);
  color: #000000;
  padding: 10px 0 10px 14px;
  transition: all 150ms ease;
  &:hover {
    background: rgba(254, 95, 30, 0.05);
    color: #fe5f1e;
  }
`;

interface ISortTypes {
  rating: string,
  price: string,
  title: string
}

const Sort = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [currentType, setCurrentType] = useState<string>('rating');
  const [searchParams, setSearchParams] = useSearchParams();

  const sortTypes: ISortTypes  = {
    rating: "популярности",
    price: "цене",
    title: 'алфавиту'
  }

  const dropdownRef = useRef(null);
  const currentTypeRef = useRef(null);

  const closeDropdown: any = (event: React.ChangeEvent<HTMLElement>): void => {
    if (
      event.target !== dropdownRef.current &&
      event.target !== currentTypeRef.current
    ) {
      setActiveDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const onSortType = (type: string) => {
    setCurrentType(type)
    setSearchParams({
      sortBy: type, 
      order: type === 'title' ? 'asc' : 'desc',
      category: searchParams.get('category') || '',
      title: searchParams.get('title') || ''
    })
  }

  return (
    <SortWrap>
      <SortIcon src={Arrow} />
      <SortName>Сортировка по:</SortName>
      <SortType>
        <SortCurrentType
          onClick={() => setActiveDropdown(!activeDropdown)}
          ref={currentTypeRef}
        >
          {sortTypes[searchParams.get('sortBy') as keyof typeof sortTypes || currentType]}
        </SortCurrentType>
        <SortTypeDropdown ref={dropdownRef} active={activeDropdown}>
          <SortTypeDropdownList>
            {Object.keys(sortTypes).map((type, index) => {
              return (
                <SortTypeDropdownItem key={index} onClick={() => onSortType(type)}>
                  {sortTypes[type as keyof typeof sortTypes]}
                </SortTypeDropdownItem>
              )
            })}
          </SortTypeDropdownList>
        </SortTypeDropdown>
      </SortType>
    </SortWrap>
  );
};

export default Sort;
