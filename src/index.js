import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, BrowserRouter as Router } from "react-router-dom"

import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)

reportWebVitals()
