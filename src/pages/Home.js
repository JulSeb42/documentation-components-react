// Packages
import React from "react"
import { Font } from "components-react-julseb"

// Components
import Page from "../components/Page"
import CodeContainer from "../components/CodeContainer"

// Data
import SiteData from "../components/data/SiteData"

function Home() {
    return (
        <Page title="Home">
            <Font.H1>{SiteData.Name}</Font.H1>

            <Font.H2>Install</Font.H2>

            <CodeContainer language="bash">
                npm i components-react-julseb
            </CodeContainer>
        </Page>
    )
}

export default Home
