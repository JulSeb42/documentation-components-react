// Packages
import React from "react"
import styled from "styled-components"
import { Wrapper, Main, Font } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

const Container = styled(Wrapper)`
    grid-template-columns: 1fr 600px 1fr;
`

const DemoMain = props => {
    return (
        <DemoPage title="Demo Main">
            <Container>
                <Main>
                    <Font.H1>Main</Font.H1>
                </Main>
            </Container>
        </DemoPage>
    )
}

export default DemoMain
