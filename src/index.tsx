import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalContext } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <ColorModeScript />
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
