import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDetailsPeople } from "../Redux/selectors/app";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chips from "./Chips";
import styles from "./components.module.css";

export default function Selects({ item }) {
  const dataFilms = useSelector(getDetailsPeople);
  const [film, setFilm] = React.useState("");
  const [datadirector, setDataDataDirector] = React.useState<any>([]);
  const [dataPlanets, setDataPlanets] = React.useState<any>([]);
//funcion para el cambio de estado del select 
  const handleChange = (event: SelectChangeEvent) => {
    setFilm(event.target.value as string);
  };
  useEffect(() => {
    //primero se evalua si datafilms existe si existe se puede trabajar los siguientes array 
    //filtramos toda la info donde film sea igual al film seleccionado 
    //luego se mapea la data para tener el director y los planeatas de dichas peliculas
    //si alguno de ellos cambia se hace un efecto para recibir los cambios y actualizar el nuevo estado, tanto de 
    //los directores como de los planetas
    if(dataFilms){
        const dataDirAux = dataFilms?.person?.filmConnection?.edges.filter(
            (item) => item.node.title === film );
          setDataDataDirector(dataDirAux);
          const dataPlanetsAux = datadirector?.map(
            (item) => item.node.planetConnection.planets
          );
          setDataPlanets(dataPlanetsAux[0]);
    }
    
  }, [film,datadirector]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Seleccione pelicula
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={film}
          label="Seleccione pelicula"
          onChange={handleChange}
        >
          {item?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={styles.chips}>
        <div>
          <p> Director:</p>
          {datadirector?.map((item, index) => (
            <Chips key={index} item={item.node.director} />
          ))}
        </div>
        <div>
          <p> Planetas:</p>
          {dataPlanets?.map((item,index) => (
            <Chips key={index} item={item.name} />
          ))}
        </div>
      </div>
    </Box>
  );
}
