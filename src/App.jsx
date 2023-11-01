import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Sostenibilidad from "./components/Sostenibilidad";
import ItemListContainer from "./components/ItemListContainer";
import CartProvider from "./context/CartContext";


function App() {
  return (
    
    <BrowserRouter> 
     <CartProvider>  
        <NavBar />      
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/sostenibilidad" element={<Sostenibilidad />} />
        <Route
         exact
         path="/category/:category"
         element={<ItemListContainer/>}/>
        <Route exact path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
      </CartProvider>  
    </BrowserRouter>
  );
}
export default App;
