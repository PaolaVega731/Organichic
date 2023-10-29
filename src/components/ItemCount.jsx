import { Button } from "bootstrap";
import { useState } from "react";
import {} from 'react-bootstrap/Button';

const ItemCount =() => {
    const [count,setCount]= useState (0)

    const mostrar = () => {
        alert(`Vas a agregar ${count} productos a tu carrito`)
    }
    return (
        <div className="ItemDetail">
        <h3>Contador</h3>
        <Button variant="primary" onClick={()=> setCount(count -1 )} m={1}>-</Button>
        <Button m={1}>{count}</Button>
        <Button variant="primary" onClick={()=> setCount (count + 1)} m={1}>+</Button>
        <Button>Add to cart</Button>
        <p>Valor actual: {count}</p>
        </div>             
    )
}
export default ItemCount

