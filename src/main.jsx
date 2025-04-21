import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import Tanstack from "./Tanstack.jsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <Tanstack>
        <App />
      </Tanstack>
    </MantineProvider>
  </StrictMode>
);
