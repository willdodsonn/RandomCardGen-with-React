//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import CardGen from "./component/cardGen";

//import your own components

//render your react application
ReactDOM.render(<CardGen />, document.querySelector("#app"));
