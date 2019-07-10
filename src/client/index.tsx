import * as React from "react";
import { render } from "react-dom";
import App from "../server/App";
import "./styles.scss";

const login = () => {
    const rootElement = document.getElementById("root");
    render(<App title="Forms with Formik + TypeScript" />, rootElement);
}

export default login;