// Packages
import React from "react"
import { Font, CodeContainer } from "components-react-julseb"

// Components
import Page from "../components/Page"

const Homepage = () => {
    return (
        <Page title="Homepage">
            <Font.H1>Documentation Components library</Font.H1>

            <Font.H2>Install</Font.H2>

            <CodeContainer language="shell">
                {`npm i components-react-julseb js-utils-julseb`}
            </CodeContainer>

            <Font.H2>Import CSS file</Font.H2>

            <Font.P>
                Open your <code>index.js</code> file, and import this file on
                top of the page:
            </Font.P>

            <CodeContainer language="js">
                {`import "components-react-julseb/dist/components/index.css"`}
            </CodeContainer>
        </Page>
    )
}

export default Homepage
