import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

let Root = () => (
  <div>
  <App />
  </div>

)

ReactDOM.render(<Root />, document.querySelector("#root"));
