// Packages
import React from "react"
import { Wrapper, Main, Font, Aside } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

const DemoAsideLeft = props => {
    return (
        <DemoPage title="Demo Aside Left">
            <Wrapper template="aside-left">
                <Aside template="aside-left">
                    <Font.P>Aside</Font.P>
                </Aside>

                <Main template="aside-left">
                    <Font.H1>Main</Font.H1>
                </Main>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoAsideLeft
