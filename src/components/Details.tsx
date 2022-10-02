import React, { useState, useEffect } from "react";
import Selects from "./Selects";
import moment from "moment";

const Details = ({ details }) => {
  const [films, setFilms] = useState<any>();
  //Mapea los detalles del personaje
  useEffect(() => {
    const film = details?.filmConnection.edges.map((item) => item.node.title);
    setFilms(film);
  }, []);

  return (
    <div>
      <h1>{details?.name} </h1>
      <p>
        <b>Genero </b>: {details?.gender}
      </p>
      <p>
        <b>Cumpleaños </b>: {details?.birthYear}
      </p>
      <p>
        <b>Creado </b>: {moment(details?.edited).format("MM/DD/YYYY")}
      </p>
      <p>
        <b>Editado </b>:{moment(details?.edited).format("MM/DD/YYYY")}
      </p>
      <div>
        <p> Peliculas:</p>
        <Selects item={films} />
      </div>
    </div>
  );
};

export default Details;
