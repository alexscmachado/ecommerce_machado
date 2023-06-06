import NavBar from './components/navbar/NavBar';
import React from 'react';
import './styles/ListItensContents.css';
import './styles/NavBar.css';
import ListItensContents from './components/listItens/ListItensContents';
import ItemDetailsContainer from './components/datails/ItemDetailsContainer';
import "./styles/itemListDetails.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarCarrinho from './components/navbar/NavBarCarrinho';
import NavBarLogin from './components/navbar/NavBarCarrinho';
import CartContextProvider, { Cart, CartContext } from './contexts/CartContext';
import Carrinho from './components/cart/CartPage';
import './styles/Cart.css';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Cart.Provider value={[{ id: 1, ammount: 5 }]}>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ListItensContents />} />;
              <Route exact path="/category/:categoryId" element={<ListItensContents />} />;
              <Route exact path="/cart" element={<Carrinho />} />;
              <Route exact path="/item/:itemId" element={<ItemDetailsContainer />} />;
              <Route exact path="/cart" element={<Carrinho/>} />;
              <Route exact path="/cart" element={<NavBarLogin />} />;
              <Route exact path="/*" element={<p>"Página não encontrada"</p>} />
            </Routes>
            {/*<ListItensContents /> {/*Coloquei a tag aqui para visualizar na página*/}
            <section>
            </section>
          </div>
        </Cart.Provider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;