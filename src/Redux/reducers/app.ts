import { initialStateApp } from "../states/app";
import {
  GET_OPEN_MODAL,
  GET_QUERY,
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_REQUEST_ERROR,
  GET_CHARACTER_ID_REQUEST,
  GET_CHARACTER_ID_ERROR,
} from "../constants/app";
export default function toDoApp(state = initialStateApp, action) {
  switch (action.type) {
    case GET_OPEN_MODAL: {
      return {
        ...state,
        modal: action.payload,
      };
    }
    case GET_QUERY: {
      return {
        ...state,
        idQuery: action.payload,
      };
    }
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        list: action.payload,
        error: false,
      };
    }
    case GET_CHARACTERS_REQUEST_ERROR: {
      return {
        ...state,
        error: action.payload,
        list: [],
      };
    }
    case GET_CHARACTER_ID_REQUEST: {
      return {
        ...state,
        detailCharacter: action.payload,
        error: false,
      };
    }
    case GET_CHARACTER_ID_ERROR: {
      return {
        ...state,
        error: action.payload,
        detailCharacter: {},
      };
    }
    default:
      return state;
  }
}
