// Packages
import React from "react"
import { Font, Wrapper, Main } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

function DemoContainerForm(props) {
    return (
        <DemoPage title="Demo container form">
            <Wrapper template="form">
                <Main>
                    <Font.H1>Main</Font.H1>
                </Main>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoContainerForm
