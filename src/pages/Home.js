// Packages
import React from "react"
import { Font } from "components-react-julseb"

// Components
import Page from "../components/Page"
import {
    DemoContainer,
    DemoCode,
} from "../components/DemoContainer"


// Data
import SiteData from "../components/data/SiteData"

function Home() {
    return (
        <Page title="Home">
            <Font.H1>{SiteData.Name}</Font.H1>

            <Font.H2>Install</Font.H2>

            <DemoContainer>
                <DemoCode className="bash">
                    {"npm i components-react-julseb"}
                </DemoCode>
            </DemoContainer>
        </Page>
    )
}

export default Home
