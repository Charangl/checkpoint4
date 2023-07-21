import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import userReducer, { initialState } from "./reducers/userReducer";
import { UserContextProvider } from "./contexts/UserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContextProvider reducer={userReducer} initialState={initialState}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);
