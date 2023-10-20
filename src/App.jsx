import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
      
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
