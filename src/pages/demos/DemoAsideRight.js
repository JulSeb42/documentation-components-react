// Packages
import React from "react"
import { Wrapper, Main, Font, Aside } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

const DemoAsideRight = props => {
    return (
        <DemoPage title="Demo Aside Right">
            <Wrapper template="aside-right">
                <Main template="aside-right">
                    <Font.H1>Main</Font.H1>
                </Main>

                <Aside template="aside-right">
                    <Font.P>Aside right</Font.P>
                </Aside>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoAsideRight
