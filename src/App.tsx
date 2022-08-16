import styled from 'styled-components';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1 1 auto;
`

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<h1>Корзина</h1>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Main>
    </Wrapper>
  );
}

export default App;
