import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Components
import App from "./App"

// Styles
import "components-react-julseb/dist/components/index.css"
import "./styles/atom-dark.css"

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
