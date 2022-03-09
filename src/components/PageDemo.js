// Packages
import React from "react"
import { Button, Font } from "components-react-julseb"

// Components
import Page from "./Page"
import { DemoContainer, DemoCode } from "./DemoContainer"

const PageDemo = props => {
    return (
        <Page title={props.title}>
            <Button
                iconLeft="chevron-left"
                btnStyle="text"
                justify="start"
                to={`/${props.category}`}
                noPadding
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

export default PageDemo
