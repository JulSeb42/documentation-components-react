// Packages
import React from "react"
import { Font, Button } from "components-react-julseb"

// Components
import Page from "./Page"
import { DemoContainer, DemoCode } from "./DemoContainer"

function ComponentPage(props) {
    return (
        <Page title={props.title}>
            <Button
                iconleft="chevron-left"
                btnstyle="text"
                color="primary"
                justify="start"
                nopadding
                to={`/${props.category}`}
            >
                Back to the list
            </Button>

            <Font.H1>{props.title}</Font.H1>

            {props.import && (
                <>
                    <Font.H2>Import</Font.H2>

                    <DemoContainer>
                        <DemoCode>
                            {`import { ${props.import} } from "components-react-julseb"`}
                        </DemoCode>
                    </DemoContainer>
                </>
            )}

            {props.children}
        </Page>
    )
}

export default ComponentPage