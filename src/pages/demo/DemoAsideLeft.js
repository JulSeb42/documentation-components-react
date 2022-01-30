// Packages
import React from "react"
import { Wrapper, Main, Font, Aside } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

function DemoAsideLeft(props) {
    return (
        <DemoPage title="Demo Aside Left">
            <Wrapper template="aside-left">
                <Aside col={2}>
                    <Font.P>Aside</Font.P>
                </Aside>

                <Main col={3}>
                    <Font.H1>Main</Font.H1>
                </Main>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoAsideLeft
