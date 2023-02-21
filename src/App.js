import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Goods from './components/Pages/Goods';
import About from './components/Pages/About';
import Basket from './components/Pages/Basket';

export const MyContext = React.createContext();

function App() {


  const [goodInBasket, setGoodInBasket] = useState([]);
 
 
  const addToOrder = (item) => {
   setGoodInBasket([...goodInBasket, item])
   console.log(goodInBasket)
   }




  return (
    <div className="App">
      <MyContext.Provider value={{goodInBasket, setGoodInBasket, addToOrder}}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;




