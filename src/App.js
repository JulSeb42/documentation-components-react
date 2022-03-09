// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"

// Routes
import routes from "./routes/routes"

const App = () => {
    return (
        <Routes>
            {routes.map((route, i) => (
                <Route path={route.path} element={<route.element />} key={i} />
            ))}
        </Routes>
    )
}

export default App
