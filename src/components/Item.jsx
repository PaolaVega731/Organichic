
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({ title, image, id }) => {
  const {category} = useParams();
  return (
    <Card style={{ width: "18rem"}}>
      <img src={image} alt="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={category ==undefined? 
        `product/${id}`:`/product/${id}`}>
          <div className="d-flex justify-content-center">
          <Button className="text-center" variant="primary">Ver detalle</Button>
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
