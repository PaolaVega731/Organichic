import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    padding: windowWidth <= 600 ? "50px" : "100px",
    backgroundImage: 'url("../../public/Home.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const textCenterStyle = {
    fontWeight: "normal",
    fontSize: windowWidth <= 600 ? "20px" : "30px",
    marginTop: "50px",
    color: "brown",
  };
  const textCenterStyle1 = {
    fontWeight: "normal",
    fontSize: windowWidth <= 600 ? "18px" : "25px",
    marginTop: "80px",
  };

  return (
    <div style={containerStyle}>
      <div className="container mt-10">
        <h1 className="text-center" style={textCenterStyle}>
          <strong>Somos Planet Friendly</strong>
        </h1>
        <h2 className="mb-4 text-sm" style={textCenterStyle1}>
          Un día imaginamos el planeta que queríamos habitar... y para hacerlo
          posible, quisimos que las prendas OrganiChic fueran prendas
          sostenibles, ecológicas y de comercio justo. Diseñadas y fabricadas
          para proteger la vida en nuestro planeta hogar.
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
