//configureStore.js
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createStore,  applyMiddleware, compose } from 'redux';
import {configureStore  } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'appState']
};

//confifuracion del store para usarlo en la app de manera global
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
   //  typeof window !== 'undefined' && (window as any ).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()  : (args:any) => args
     )(createStore)(persistedReducer);
     let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };

 
