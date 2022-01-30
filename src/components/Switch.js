// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"
import { scrollToTop, capitalize } from "components-react-julseb"

// Pages
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Styles from "../pages/Styles"

// Markdown pages
import MarkdownPage from "./MarkdownPage"
import pagesStyles from "./data/pagesStyles"

function Switch(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} preload={scrollToTop()} />

            <Route path="*" element={<NotFound />} preload={scrollToTop()} />

            <Route
                path="/styles"
                element={<Styles />}
                preload={scrollToTop()}
            />

            {pagesStyles.map((page, i) => (
                <Route
                    path={`/styles/${page.title}`}
                    element={
                        <MarkdownPage
                            title={capitalize(page.title)}
                            content={page.title}
                            imports={page.import}
                            category="styles"
                        />
                    }
                    key={i}
                />
            ))}

            {/* {pagesStyles.map((page, i) => (
                <Route
                    path={`/styles/${page}`}
                    element={
                        <MarkdownPage content={page} title={capitalize(page)} />
                    }
                />
            ))} */}
        </Routes>
    )
}

export default Switch
