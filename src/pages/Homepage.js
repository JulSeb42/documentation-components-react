// Imports
import React from "react"
import { Font, CodeContainer, Grid, Variables } from "tsx-library-julseb"

import Page from "../components/Page"

import siteData from "../data/siteData"

const Homepage = () => {
    return (
        <Page title="Homepage" subtitle={siteData.name}>
            <Grid gap={Variables.Spacers.XS}>
                <Font.H2>Install</Font.H2>

                <CodeContainer language="shell">
                    npm i tsx-library-julseb js-utils-julseb
                </CodeContainer>
            </Grid>

            <Grid gap={Variables.Spacers.XS}>
                <Font.H2>Import CSS file</Font.H2>

                <Font.P>
                    Open your <code>index.js</code> file, and import this file
                    on top of the page:
                </Font.P>

                <CodeContainer language="javascript">
                    {siteData.linkCss}
                </CodeContainer>
            </Grid>
        </Page>
    )
}

export default Homepage
