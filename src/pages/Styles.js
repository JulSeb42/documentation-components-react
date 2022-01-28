// Packages
import React from "react"
import { Font, Grid, Button, capitalize } from "components-react-julseb"

// Components
import Page from "../components/Page"

// Data
import pagesStyles from "../components/data/pagesStyles"

function Styles() {
    return (
        <Page title="Styles">
            <Font.H1>Styles</Font.H1>

            <Grid col={4}>
                {pagesStyles.map((page, i) => (
                    <Button
                        btnstyle="plain"
                        color="primary"
                        to={`/styles/${page}`}
                        key={i}
                    >
                        {capitalize(page)}
                    </Button>
                ))}
            </Grid>
        </Page>
    )
}

export default Styles
