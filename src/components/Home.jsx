import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-red-700">Somos Planet Friendly</h1>
      <h2 className="text-cyan-600">
        Un día imaginamos el planeta que queríamos habitar... y para hacerlo
        posible, quisimos que las prendas OrganiChic fueran prendas sostenibles,
        ecológicas y de comercio justo. Diseñadas y fabricadas para proteger la
        vida en nuestro planeta hogar.
      </h2>
      <img
        className="w-30 h-20"
        src="https://cdn.shopify.com/s/files/1/0764/9168/6233/files/ECO.svg?v=1690646254"
        alt=""
      />
      <img
        className="w-30 h-20"
        src="https://cdn.shopify.com/s/files/1/0764/9168/6233/files/AlgodonOrganico.svg?v=1690646320"
        alt=""
      />
      <img
        className="w-30 h-20"
        src="https://cdn.shopify.com/s/files/1/0764/9168/6233/files/Vegan_21ad9ff4-12df-4d3f-9a75-54e02f2972ca.svg?v=1690646363"
        alt=""
      />
    </div>
  );
};

export default Home;
