import { useState } from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'

const Cart = () => {
  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Email, setEmail] = useState("")
  const [orderId, setOrderId] = useState(null)
    

  const db = getFirestore()
  const handleSubmit = (e) => {
    e.preventDefault()

    addDoc(ordersCollection, order).then(({id}) =>
      setOrderId(id) )
  }

  const order = {
    Nombre,
    Apellido,
    Email
  }

  const ordersCollection = collection(db, "MiOrden")


 
  return (
    <div>
      <h1>Formulario de compra</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      <p>Número de orden: {orderId}</p>
    </div>
  )
}
export default Form;
    
       