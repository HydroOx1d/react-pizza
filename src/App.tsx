import styled from 'styled-components';
import Header from './components/header/Header';
import Navigation from './components/filter/Filter';
import PizzaList from "./components/PizzaList/PizzaList";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1340px;
  min-height: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 0px 0px 50px 0px;
`
function App() {
  return (
    <Wrapper>
      <Header/>
      <Navigation/>
      <PizzaList/>
    </Wrapper>
  );
}

export default App;
