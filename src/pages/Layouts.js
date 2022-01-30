// Packages
import React from "react"
import { Font, Grid, Button, capitalize } from "components-react-julseb"

// Components
import Page from "../components/Page"

// Data
import pagesLayouts from "../components/data/pagesLayouts"

function Layouts(props) {
    return (
        <Page title="Layouts">
            <Font.H1>Layouts</Font.H1>

            <Grid col={4}>
                {pagesLayouts.map((page, i) => (
                    <Button
                        btnstyle="plain"
                        color="primary"
                        to={`/layouts/${page.title}`}
                        key={i}
                    >
                        {capitalize(page.title)}
                    </Button>
                ))}
            </Grid>
        </Page>
    )
}

export default Layouts