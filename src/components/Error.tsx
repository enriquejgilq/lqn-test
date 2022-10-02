import React from "react";
import styles from "./components.module.css";
import { Button } from "@mui/material";

const Error = ({ errorRequest }) => {
  //funcion para recargar la pagina 
  const onReload = () => {
    location.reload();
  };
  return (
    <div className={styles.error}>
      <h1>{errorRequest}</h1>
      <Button onClick={onReload}> Presione para recargar</Button>
    </div>
  );
};

export default Error;
