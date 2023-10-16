import React from 'react'
import Item from './Item.jsx'


const ItemDetail = ( { product}) => {
    return (
        <div>
        {
            product.map((p)=>{
                return (
                    <Item
                    Key={p.id}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    image={p.image}
                    />
                )
            })
        }       
        </div>
    )
}
export default ItemDetail