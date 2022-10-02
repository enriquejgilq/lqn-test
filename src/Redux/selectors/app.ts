export const appState = state => state.appState;
//estado del modal  
export const getModal = state => appState(state).modal;
//info del id del personaje
export const getQuery = state => appState(state).idQuery
//listado de personajes 
export const getListPeople = state => appState(state).list?.allPeople?.people
//detalles del personaje
export const getDetailsPeople = state => appState(state).detailCharacter
//error en consultas
export const getError = state => appState(state).error
//error del detalle 
export const getErrorDetails = state => appState(state).errorDetails