// Packages
import React from "react"
import { Wrapper, Main, Font } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

function DemoMain(props) {
    return (
        <DemoPage title="Demo Main">
            <Wrapper>
                <Main>
                    <Font.H1>Main</Font.H1>
                </Main>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoMain
