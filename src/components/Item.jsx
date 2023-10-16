import React from 'react'
import {Card, Button } from 'react-bootstrap'

const Item = ({title, description, price, image}) => {
    return (
        <Card style={{ width: '18rem' }}>
      <img src={image} alt='' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
        
export default Item;   
