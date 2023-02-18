import React from "react"; //will allow us to hook our application to our index.html
import ReactDOM from "react-dom"; //will allow us to hook our application to our index.html
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root")); // we will render our app to the div with the Id root in index.html
