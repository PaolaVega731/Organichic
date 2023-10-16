import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'

export const ItemDetailContainer = () => {
    


/*const mostrarProduct = new Promise ((resolve, reject) => {
    if (product.length > 0) {
        setTimeout(() => {
            resolve(productos)
            
        }, 3000)
    } else {
        reject ("No se encontraron productos")
    }
})

mostrarProduct
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error)=> {
        console.log(error)
    })*/

    

const getProducts = async () => {
    const response = await fetch ('../Json/Datos.json')
    const data = await response.json ()
    
    return data
}

const [ product, setProduct] = useState ([])

useEffect(() => {
    getProducts().then((p)=> setProduct(p))
},[])

return (
    <>
    <center p= "0.5 rem">
      <ItemDetail product ={product}/>
    </center>
    
    </>
)
}

export default ItemDetailContainer
