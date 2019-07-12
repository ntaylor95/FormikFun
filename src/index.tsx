import * as React from "react";
import { render } from "react-dom";
import App from "./server/App";
import "./styles.scss";

const rootElement = document.getElementById("root");
render(<App title="Forms with Formik + TypeScript" />, rootElement);
