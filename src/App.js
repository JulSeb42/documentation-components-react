// Imports
import React from "react"
import { Routes, Route } from "react-router-dom"

import routes from "./routes/routes"

const App = () => {
    return (
        <Routes>
            {routes.map((route, i) => (
                <Route
                    path={route.path}
                    element={<route.element slug={route.path} />}
                    key={i}
                />
            ))}
        </Routes>
    )
}

export default App
