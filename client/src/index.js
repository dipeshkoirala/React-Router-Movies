import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
/*
File structure
|--client
      |--node_modules
      |--public
      |--src
           |--Movies
                 |-- Movie.js
                 |--MovieCard.js
                 |--MovieList.js
                 |--SavedList.js
           |--App.js,index.js,setupTests.js,index.css
           (port:3000)
      |--.gitignore
      |--package & package-lock

|--node_modules
|--.gitignore
|--package
|--package-lock
|--README
|--server.js (port:5000 runs on the server)

Readme.md
Wrap app with router .+


*/
