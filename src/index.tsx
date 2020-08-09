import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";
import { RecoilRoot } from "recoil";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecoilRoot>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
