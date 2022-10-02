import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getListCharacters,
  handleQuery,
  getListError,
} from "../../Redux/actions/app";
import { getListPeople, getError } from "../../Redux/selectors/app";
import styles from "./list.module.css";
import { gql, useQuery } from "@apollo/client";
import Error from "../../components/Error";
import ModalDetails from "../../components/Modal";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
//Query para traer todos la lista de todos los personajes
const ALL_CHARACTERS: any = gql`
  query AllPeople {
    allPeople {
      edges {
        cursor
        node {
          birthYear
          created
          edited
          eyeColor
          gender
          hairColor
          height
          id
          mass
          name
          skinColor
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      people {
        birthYear
        created
        edited
        eyeColor
        filmConnection {
          totalCount
        }
        gender
        hairColor
        height
        id
        mass
        name
        skinColor
      }
      totalCount
    }
  }
`;

const ListPersonajes = () => {
  const { data, loading, error } = useQuery(ALL_CHARACTERS);
  const dispatch = useDispatch();
  const router = useRouter();
  const people = useSelector(getListPeople);
  const errorRequest = useSelector(getError);

  //efecto para guardar el id del personaje seleccionado
  useEffect(() => {
    if (router.query.details) {
      dispatch(handleQuery(router.query.details));
    }
  }, [router.query.details]);
  //si data existe se guarda la info en el redux para luego trabajar con ella
  if (data) {
    dispatch(getListCharacters(data));
  }
  //si existe algun error, se actualizar la info en el redux
  if (error) {
    dispatch(getListError("Algo ha salido mal"));
  }

  return (
    <div>
      <div>
        <div className={styles.listCharacters}>
          {loading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : (
            <Card data={people} />
          )}
          {errorRequest && <Error errorRequest={errorRequest} />}
        </div>
      </div>
      <ModalDetails />
    </div>
  );
};

export default ListPersonajes;
