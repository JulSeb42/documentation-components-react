// Imports
import React from "react"
import { Font, Grid, CodeContainer } from "tsx-library-julseb"

import Page from "./Page"

const PageComponent = ({ title, back, component, children, ...props }) => {
    return (
        <Page title={title} back={back}>
            {component && (
                <Grid gap="s">
                    <Font.H4 as="h2">Import</Font.H4>

                    <CodeContainer language="javascript">
                        {`import { ${component} } from "tsx-library-julseb"`}
                    </CodeContainer>
                </Grid>
            )}

            {children}
        </Page>
    )
}

export default PageComponent
