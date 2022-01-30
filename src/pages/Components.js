// Packages
import React from "react"
import { Font, Grid, Button, capitalize, slugify } from "components-react-julseb"

// Components
import Page from "../components/Page"

// Data
import pagesComponents from "../components/data/pagesComponents"

function Components(props) {
    return (
        <Page title="Components">
            <Font.H1>Components</Font.H1>

            <Grid col={3}>
                {pagesComponents.map((page, i) => (
                    <Button
                        btnstyle="plain"
                        color="primary"
                        to={`/components/${slugify(page.title)}`}
                        key={i}
                    >
                        {capitalize(page.title)}
                    </Button>
                ))}
            </Grid>
        </Page>
    )
}

export default Components
