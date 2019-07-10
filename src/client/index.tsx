import * as React from "react";
import { render } from "react-dom";
import App from "../server/App";

import "./styles.css";

const login = () => {
    const rootElement = document.getElementById("root");
    render(<App initialTItle="Forms with Formik + TypeScript" />, rootElement);
}

export default login;