
import { useEffect, useState } from "react";
import imgSostenibilidad from "/Sostenibilidad.jpeg";

function Sostenibilidad() {
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    minHeight: windowWidth <= 600 ? "100vh" : "70vh",
    padding: windowWidth <= 600 ? "50px" : "120px",
    backgroundImage: `url(${imgSostenibilidad})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const textStyle = {
    fontSize: windowWidth <= 600 ? "18px" : "25px",
    fontWeight: "normal",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>
        Diseñamos para ti, <strong>respetando nuestro Planeta-Hogar</strong> y
        las Personas. Para nosotros es importante controlar todas las fases del
        proceso de producción de inicio a fin para que, cuando la prenda llegue
        a ti, cumpla con todos los estándares de la moda{" "}
        <strong>ética y sostenible.</strong>
        Defendemos una moda ética, sostenible y con valores. Respetuosa con sus
        trabajadores y también con el planeta. No creemos en la dinámica de
        comprar, usar y tirar prendas, que lo único que genera son residuos a
        gran escala y desigualdades sociales en los países más pobres. Apostamos
        por una compra responsable y consciente de la moda. Tu armario habla de
        ti, de tu estilo y de cómo eres, pero también de tus valores. Y
        precisamente <strong>OrganiChic</strong> nació con esta voluntad:
        ofrecerte prendas éticas y sostenibles que te vistan y te representen,
        pero también que <strong>cuiden</strong> del planeta y de los{" "}
        <strong>trabajadores del sector textil.</strong> Porque defendemos una
        moda a pequeña escala, sin prisas y comprometida con el comercio justo,
        la producción responsable y el cuidado del medio ambiente.
      </h1>
    </div>
  );
}

export default Sostenibilidad;
