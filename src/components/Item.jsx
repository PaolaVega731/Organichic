import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({ title, image, id }) => {
  
  const {category} = useParams();
  return (
    <Card style={{ width: "18rem"}}>
      <img src={image} alt="" style={{ marginTop: "10px", borderRadius: "6px" }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Link to={category ==undefined? 
        `product/${id}`:`/product/${id}`}style={{ textDecoration: 'none' }}>
          <div className="d-flex justify-content-center">
          <Button className="text-center bg-success" variant="primary">Ver detalle</Button>
          </div>  
        </Link>
      </Card.Body>
    </Card>
  );
};
Item.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;