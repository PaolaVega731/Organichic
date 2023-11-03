import { useState, useContext } from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { Modal } from 'react-bootstrap'

const FormCart = () => {
  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Email, setEmail] = useState("")
  const [orderId, setOrderId] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { clearCart } = useContext(CartContext);

  const db = getFirestore()
  const ordersCollection = collection(db, "MiOrden")

  const handleSubmit = (e) => {
    e.preventDefault()

    addDoc(ordersCollection, order)
      .then(({id}) => {
        setOrderId(id)
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
          clearCart()
        }, 5000)
      })
  }

  const order = {
    Nombre,
    Apellido,
    Email
  }

  return (
    <div className='d-flex flex-column gap-4 '>
      <h1>Formulario de compra</h1>
      <form action="" onSubmit={handleSubmit} className='d-flex flex-column gap-4 w-50'>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} required/>
        <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} required/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
        <button type="submit" className='btn btn-success'>Comprar</button>
      </form>
      <p>Número de orden: {orderId}</p>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-dialog modal-sm">Gracias por su compra! 😄</div>
      </Modal>
    </div>
  )
}

export default FormCart;