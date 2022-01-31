// Packages
import React from "react"
import { Font, Grid, Button, capitalize } from "components-react-julseb"

// Components
import Page from "../components/Page"

// Data
import { pagesStyles } from "../components/Switch"

function Styles() {
    return (
        <Page title="Styles">
            <Font.H1>Styles</Font.H1>

            <Grid col={3}>
                {pagesStyles.map((page, i) => (
                    <Button
                        btnstyle="plain"
                        color="primary"
                        to={`/styles/${page.title}`}
                        key={i}
                    >
                        {capitalize(page.title)}
                    </Button>
                ))}
            </Grid>
        </Page>
    )
}

export default Styles
