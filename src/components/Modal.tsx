import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getModal, getQuery, getDetailsPeople } from "../Redux/selectors/app";
import { handleOpenModal, handleQuery, getDetails } from "../Redux/actions/app";
import { gql, useQuery } from "@apollo/client";
import styles from "./components.module.css";
import Details from "./Details";
import Loader from "./Loader";

export default function ModalDetails() {
  const dispatch = useDispatch();
  const openModal = useSelector(getModal);
  const id = useSelector(getQuery);
  const details = useSelector(getDetailsPeople);
  const router = useRouter();
  //query para consultar la data desde el url
  const DETAIL_CHARACTER: any = gql`{ person(id: "${router.query.details}"){
    name,
    birthYear,
    gender,
    created,
    edited,
    homeworld{name},
    filmConnection{
      edges{
        node{
          title,
          director,
          planetConnection{planets{name}}
        }}
    }
},
}`;

  const { data, loading, error } = useQuery(DETAIL_CHARACTER);
  //funcion para cerrar el modal y limpiar el url
  const handleModal = () => {
    dispatch(handleOpenModal(false));
    dispatch(handleQuery(false));
    window.history.replaceState(null, "", "/listPersonajes");
  };
  // si data existe se cumple el dispatch y guardar la info en el redux
  if (data) {
    dispatch(getDetails(data));
  }
  //efecto para abrir el modal si id existe
  useEffect(() => {
    if (id) {
      dispatch(handleOpenModal(true));
    }
  }, [id]);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          {loading ? (
            <div className={styles.loaderModal}>
              <Loader />
            </div>
          ) : (
            <>
              <Details details={details.person} />
            </>
          )}
          <Button variant="outlined" onClick={handleModal}>
            Cerrar modal!
          </Button>
        </div>
      </Modal>
    </div>
  );
}
