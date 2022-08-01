import styled from 'styled-components';

type ContainerType = {
  maxWwidth?: string
}

export const Container = styled.div<ContainerType>`
  max-width: ${(props) => props.maxWwidth ? props.maxWwidth + "px" : "1225px"};
  margin: 0 auto;
  padding: 0 15px;
`

type FlexType = {
  justify?: 'space-between' | 'space-around' | 'center' | 'flex-start' | 'flex-end'
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline'
  direction?: 'row' | 'column'
  wrap?: string
}

export const Flex = styled.div<FlexType>`
  display: flex;
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`