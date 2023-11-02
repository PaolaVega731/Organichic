import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 


const Materiales = () => {
  const containerStyle = {
    padding: '100px',
    backgroundImage: 'url("https://tiralahilacha.com/cdn/shop/files/OrganicCotton.jpg?v=1695891172&width=1066")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  const textCenterStyle = {
    fontWeight: 'normal', 
    fontSize: '30px',
    marginTop: '10px',
    color: 'brown'
    
  };
  const textCenterStyle1 = {
    fontWeight: 'normal', 
    fontSize: '25px',
    marginTop: '60px'
  };

  return (
    
     <div style={containerStyle }>
      <div className="container mt-10">
        <h1 className="text-center" style={textCenterStyle}><strong>Materiales</strong></h1>
        <h2 className="mb-4 text-sm" style={textCenterStyle1}>
        Para la confección de nuestras prendas usamos los materiales de más calidad y más respetuosos, que cuidan la salud de tu piel y contribuyen a proteger el planeta.
        </h2>
        <h3 className="mb-4 text-sm" style={textCenterStyle1}> <strong>Algodón Orgánico:</strong>
En pocas palabras, el algodón orgánico es una solución más sostenible. Se cultiva sin pesticidas a partir de semillas que no han sido modificadas genéticamente.

Las prácticas de agricultura orgánica evitan el uso de productos químicos nocivos y al mismo tiempo apuntan a la sostenibilidad ambiental y el uso de menos recursos. Las tierras agrícolas libres de productos químicos incluso permanecen fértiles durante mucho más tiempo que las tierras afectadas por el uso constante de pesticidas, por lo que los productores de algodón orgánico generalmente tienen una vida útil más larga que los del resto de la industria.

Los beneficios son claros: usar menos pesticidas significa que la salud de los trabajadores mejora dramáticamente, las comunidades pueden vivir en relativa salud con acceso a agua potable y suministros de alimentos, y la tierra tiene una vida útil más larga porque los químicos no la dañan. También significa que la ropa que usamos es más segura para nosotros, ya que no contiene la gran cantidad de químicos que a menudo se encuentran en las prendas de algodón convencionales.</h3>
<h3 className="mb-4 text-sm" style={textCenterStyle1}> <strong>Lana Merino: </strong>

La lana es transpirable y un aislante natural.

La lana tiene la capacidad (similar al Tencel) de reaccionar a los cambios en la temperatura del cuerpo, lo que significa que se mantiene fresca en verano y cálida en invierno.

La lana suele ser biodegradable. Se descompone fácilmente, al igual que el algodón y otras fibras vegetales. Eso significa que una vez que una prenda de lana se desgasta, puedes enterrarla en el suelo y eventualmente se convertirá en abono.</h3>
<h3 className="mb-4 text-sm" style={textCenterStyle1}> <strong>Lino Orgánico:</strong>
El lino es uno de los tejidos más biodegradables y elegantes de la historia de la moda. Es fuerte, de secado rápido, resistente a las polillas y está hecho de fibras vegetales, por lo que cuando no se trata (es decir, no se tiñe) es completamente biodegradable. Sus colores naturales incluyen marfil, crudo, tostado y gris.

El lino puede soportar altas temperaturas, lo que hace que la tela sea ideal para explorar la jungla o descansar en una isla tropical. También absorbe la humedad sin retener bacterias. De hecho, es más fuerte cuando está húmedo que seco y se vuelve más suave y flexible cuanto más se lava. Básicamente envejece como un buen vino.

El lino es duradero, se puede fabricar de forma más sostenible que la mayoría de los otros materiales y te hace sentir como si estuvieras caminando por las costas del Mediterráneo cuando lo llevas puesto.

Es uno de los textiles menos dañinos para el medio ambiente , ya que sus fibras naturales se reabsorben en el entorno que los rodea en cuestión de años en lugar de siglos. Tampoco contribuyen a la actual crisis de contaminación por microplásticos en la hidrosfera, que amenaza la vida acuática y humana.</h3>
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

export default Materiales;
