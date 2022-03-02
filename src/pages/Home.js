// Packages
import React from "react"
import { Font, Variables } from "components-react-julseb"
import styled from "styled-components"

// Components
import Page from "../components/Page"
import {
    DemoContainer,
    DemoCode,
} from "../components/DemoContainer"
import Item from "../components/Item"


// Data
import SiteData from "../components/data/SiteData"

const P = styled(Font.P)`
    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Margins.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
    }
`

function Home() {
    return (
        <Page title="Home">
            <Font.H1>{SiteData.Name}</Font.H1>

            <Item>
                <Font.H2>Install</Font.H2>

                <DemoContainer>
                    <DemoCode className="bash">
                        {"npm i components-react-julseb"}
                    </DemoCode>
                </DemoContainer>
            </Item>

            <Item>
                <Font.H2>Import CSS file</Font.H2>

                <P>
                    Open your <code>index.js</code> file, and import this file
                    on top of the page:
                </P>

                <DemoContainer>
                    <DemoCode>
                        {
                            'import "components-react-julseb/dist/components/index.css"'
                        }
                    </DemoCode>
                </DemoContainer>
            </Item>
        </Page>
    )
}

export default Home
