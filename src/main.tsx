import React from "react";
import ReactDOM from "react-dom/client";
import { SpinnerExample } from "./examples/SpinnerExample";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <ButtonExample /> */}
        <SpinnerExample />
    </React.StrictMode>,
);
