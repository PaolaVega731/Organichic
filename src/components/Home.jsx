import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 


const Home = () => {
  const containerStyle = {
    padding: '100px',
    backgroundImage: 'url("https://scontent.cdninstagram.com/v/t51.2885-15/393113868_863752148798275_5502551303501225435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=pyI4FjAibpcAX-fXwME&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCITP2HfGQAtSUk6mcx_ePaQ8YeSQK9Q2iASy10LK7HdQ&oe=6547DE93")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    
  };

  const textCenterStyle = {
    fontWeight: 'normal', 
    fontSize: '30px',
    marginTop: '50px',
    color: 'brown'
    
  };
  const textCenterStyle1 = {
    fontWeight: 'normal', 
    fontSize: '25px',
    marginTop: '80px'
  };

  return (
    
     <div style={containerStyle }>
      <div className="container mt-10">
        <h1 className="text-center" style={textCenterStyle}>Somos Planet Friendly</h1>
        <h2 className="mb-4 text-sm" style={textCenterStyle1}>
          Un día imaginamos el planeta que queríamos habitar... y para hacerlo
          posible, quisimos que las prendas OrganiChic fueran prendas sostenibles,
          ecológicas y de comercio justo. Diseñadas y fabricadas para proteger la
          vida en nuestro planeta hogar.
        </h2>
        <div className="d-flex justify-content-center">       
          <img
            src="https://cdn.shopify.com/s/files/1/0764/9168/6233/files/ECO.svg?v=1690646254"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0764/9168/6233/files/Vegan_21ad9ff4-12df-4d3f-9a75-54e02f2972ca.svg?v=1690646363"
            alt=""
          />        
        </div>
      </div>
    </div>
  );
};

export default Home;
