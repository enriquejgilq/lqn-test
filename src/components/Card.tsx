import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { handleQuery } from "../Redux/actions/app";
import { Button } from "@mui/material";
import moment from "moment";
import styles from "./components.module.css";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
//Ir a los detalles de la ruta
  const goToDetails = (data) => {
    dispatch(handleQuery(data));
    (router.query.details = data), router.push(router);
  };
  return (
    <div className={styles.container}>
      <h1> Lista de personajes</h1>
      <div className={styles.gridcontainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.griditem}>
            <h3>{item.name} </h3>
            <div>
              <p>
                <b>Id de Personaje : </b>
                {item.id}
              </p>
              <p>
                <b>Cumpleaños : </b>
                {item.birthYear}
              </p>
              <p>
                <b>color de pelo : </b>
                {item.hairColor}
              </p>
              <p>
                <b>Genero : </b>
                {item.gender}
              </p>
              <p>
                <b>Color de ojos : </b>
                {item.eyeColor}
              </p>
              <p>
                <b>color de piel : </b>
                {item.skinColor}
              </p>
              <p>
                <b>Altura : </b>
                {item.height}
              </p>
              <p>
                <b>Fecha de edcion : </b>
                {moment(item.edited).format("MM/DD/YYYY")}
              </p>
              <p>
                <b>Fecha de creacion : </b>{" "}
                {moment(item.created).format("MM/DD/YYYY")}{" "}
              </p>
              <Button
                size="small"
                sx={{ color: "black", backgroundColor: "#ffc300" }}
                onClick={() => goToDetails(item.id)}
              >
                Ver detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
