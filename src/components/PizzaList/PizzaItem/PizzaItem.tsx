import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../../assets/pizza/plus.svg";

const PizzaItemSC = styled.div`
  height: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 920px) {
    margin: 0 auto;
  }
`;
const PizzaItemIblock = styled.div`
  max-width: 259px;
  overflow: hidden;
`;
const PizzaItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const PizzaItemTitle = styled.h3`
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 0.01em;
  margin-bottom: 20px;
  text-align: center;
  flex: 1 1 auto;
`;
const PizzaKinds = styled.div`
  padding: 7px 5px;
  width: 100%;
  background: #f3f3f3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;
`;

type CountType = {
  countType?: number
}

const PizzaKindsButtonsTop = styled.div<CountType>`
  display: grid;
  grid-template-columns: repeat(${props => props.countType}, 1fr);
  gap: 5px;
`;
const PizzaKindsButtonsBottom = styled.div<CountType>`
  display: grid;
  grid-template-columns: repeat(${props => props.countType}, 1fr);
  gap: 5px;
`;
type PizzaKindsButtonType = {
  smallPadding?: boolean;
  active?: boolean;
};
const PizzaKindsButton = styled.button<PizzaKindsButtonType>`
  border: none;
  background: ${(props) => (props.active ? "#ffffff" : "transparent")};
  padding: ${(props) => (props.smallPadding ? "10px 15px" : "10px 30px")};
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  }
`;
const PizzaItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const PizzaItemPrice = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.015em;
`;
const PizzaItemBottomButton = styled.button`
  border: 1px solid #eb5a1e;
  border-radius: 30px;
  background: #eb5a1e;
  transition: 0.3s ease-in-out;
  padding: 11px 20px;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
  :hover {
    background: #fff;
    color: #eb5a1e;
    svg {
      fill: #eb5a1e;
    }
  }
`;
const IconSC = styled(Icon)`
  fill: #fff;
  transition: 0.3s ease-in-out;
`;

interface IPizzaItem {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const PizzaItem: React.FC<IPizzaItem> = ({
  imageUrl,
  title,
  price,
  sizes,
  types,
}) => {
  const [activePizzaType, setActivePizzaType] = React.useState(0);
  const [activePizzaSize, setActivePizzaSize] = React.useState(0);
  const pizzaTypes = ["тонкое", "традиционное"];

  return (
    <PizzaItemSC>
      <PizzaItemIblock>
        <PizzaItemImg src={imageUrl} />
      </PizzaItemIblock>
      <PizzaItemTitle>{title}</PizzaItemTitle>
      <PizzaKinds>
        <PizzaKindsButtonsTop countType={types.length}>
          {types.map((type, index) => {
            return (
              <PizzaKindsButton
                onClick={() => setActivePizzaType(index)}
                active={activePizzaType === index}
                key={type}
              >
                {pizzaTypes[type]}
              </PizzaKindsButton>
            );
          })}
        </PizzaKindsButtonsTop>
        <PizzaKindsButtonsBottom countType={sizes.length}>
          {sizes.map((size, index) => {
            return (
              <PizzaKindsButton
                onClick={() => setActivePizzaSize(index)}
                active={activePizzaSize === index}
                key={size}
                smallPadding
              >
                {size} см.
              </PizzaKindsButton>
            );
          })}
        </PizzaKindsButtonsBottom>
      </PizzaKinds>
      <PizzaItemBottom>
        <PizzaItemPrice>от {price} ₽</PizzaItemPrice>
        <PizzaItemBottomButton>
          <IconSC />
          Добавить
        </PizzaItemBottomButton>
      </PizzaItemBottom>
    </PizzaItemSC>
  );
};

export default PizzaItem;
