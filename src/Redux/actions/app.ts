import {
  GET_OPEN_MODAL,
  GET_QUERY,
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_REQUEST_ERROR,
  GET_CHARACTER_ID_REQUEST,
  GET_CHARACTER_ID_ERROR,
} from "../constants/app";

export const handleOpenModal = (open) => {
  return {
    type: GET_OPEN_MODAL,
    payload: open,
  };
};

export const handleQuery = (query) => {
  return {
    type: GET_QUERY,
    payload: query,
  };
};

export const getListCharacters = (list) => {
  return {
    type: GET_CHARACTERS_REQUEST,
    payload: list,
  };
};

export const getListError = (error) => {
  return {
    type: GET_CHARACTERS_REQUEST_ERROR,
    payload: error,
  };
};
export const getDetails = (details) => {
  return {
    type: GET_CHARACTER_ID_REQUEST,
    payload: details,
  };
};

export const getDetailsError = (error) => {
  return {
    type: GET_CHARACTER_ID_ERROR,
    payload: error,
  };
};
