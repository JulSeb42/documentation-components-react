// Packages
import React from "react"
import { Font, Grid, Button, capitalize, slugify } from "components-react-julseb"

// Components
import Page from "../components/Page"

// Data
import { pagesHelpers } from "../components/Switch"

function Helpers(props) {
    return (
        <Page title="Helpers">
            <Font.H1>Helpers</Font.H1>

            <Grid col={3}>
                {pagesHelpers.map((page, i) => (
                    <Button
                        btnstyle="plain"
                        color="primary"
                        to={`/helpers/${slugify(page.title)}`}
                        key={i}
                    >
                        {capitalize(page.title)}
                    </Button>
                ))}
            </Grid>
        </Page>
    )
}

export default Helpers
