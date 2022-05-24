// Imports
import React from "react"
import { Link } from "react-router-dom"
import { Font } from "tsx-library-julseb"

import Page from "../components/Page"

const NotFound = () => {
    return (
        <Page title="Page not found">
            <Font.P>
                <Link to="/">Back to homepage.</Link>
            </Font.P>
        </Page>
    )
}

export default NotFound
