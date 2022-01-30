// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"
import { scrollToTop, capitalize } from "components-react-julseb"

// Pages
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Styles from "../pages/Styles"
import Layouts from "../pages/Layouts"

// Markdown pages
import MarkdownPage from "./MarkdownPage"
import pagesStyles from "./data/pagesStyles"
import pagesLayouts from "./data/pagesLayouts"

// Demo pages
import DemoMain from "../pages/demo/DemoMain"
import DemoAsideLeft from "../pages/demo/DemoAsideLeft"
import DemoAsideRight from "../pages/demo/DemoAsideRight"

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
                    preload={scrollToTop()}
                    key={i}
                />
            ))}

            <Route
                path="/layouts"
                element={<Layouts />}
                preload={scrollToTop()}
            />

            {pagesLayouts.map((page, i) => (
                <Route
                    path={`/layouts/${page.title}`}
                    element={
                        <MarkdownPage
                            title={capitalize(page.title)}
                            content={page.title}
                            imports={page.import}
                            category="layouts"
                        />
                    }
                    preload={scrollToTop()}
                    key={i}
                />
            ))}

            <Route
                path={"/layouts/container/demo-main"}
                element={<DemoMain />}
                preload={scrollToTop()}
            />

            <Route
                path={"/layouts/container/demo-aside-left"}
                element={<DemoAsideLeft />}
                preload={scrollToTop()}
            />

            <Route
                path={"/layouts/container/demo-aside-right"}
                element={<DemoAsideRight />}
                preload={scrollToTop()}
            />

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
