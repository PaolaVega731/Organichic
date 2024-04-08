import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import Sostenibilidad from "./components/Sostenibilidad.jsx";
import Materiales from "./components/Materiales.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import CartProvider from "./context/CartContext.jsx";




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
        <Route exact path="/materiales" element={<Materiales />} />
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
