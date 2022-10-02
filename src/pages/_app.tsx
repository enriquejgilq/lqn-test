import TemporaryDrawer from "../components/NavBar";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "../../graphql/apollo";
import { Provider } from "react-redux";
import { store, persistor, sagaMiddleware } from "../Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
      <Provider store={store}>
        <ApolloProvider client={graphqlClient}>
          <PersistGate loading={null} persistor={persistor}>
               <Component {...pageProps} />
             <TemporaryDrawer />
          </PersistGate>
        </ApolloProvider>
      </Provider> ,
    </>
  );
}

export default MyApp;
