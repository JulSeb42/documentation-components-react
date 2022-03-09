// Packages
import React from "react"
import { Link } from "react-router-dom"
import { Font } from "components-react-julseb"

// Components
import Page from "../components/Page"

const NotFound = () => {
    return (
        <Page title="Page not found">
            <Font.H1>Page not found!</Font.H1>

            <Font.P>
                <Link to="/">Back to homepage.</Link>
            </Font.P>
        </Page>
    )
}

export default NotFound
