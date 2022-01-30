// Packages
import React from "react"
import { Wrapper, Main, Font, Aside } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

function DemoAsideRight(props) {
    return (
        <DemoPage title="Demo Aside Right">
            <Wrapper template="aside-right">
                <Main col={2}>
                    <Font.H1>Main</Font.H1>
                </Main>

                <Aside col={3}>
                    <Font.P>Aside</Font.P>
                </Aside>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoAsideRight
