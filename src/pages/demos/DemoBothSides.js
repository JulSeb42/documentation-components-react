// Packages
import React from "react"
import { Wrapper, Main, Font, Aside } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

const DemoBothSides = props => {
    return (
        <DemoPage title="Demo Both sides">
            <Wrapper template="both-sides">
                <Aside template="both-sides">
                    <Font.P>Aside left</Font.P>
                </Aside>

                <Main template="both-sides">
                    <Font.H1>Main</Font.H1>
                </Main>

                <Aside template="both-sides" last>
                    <Font.P>Aside right</Font.P>
                </Aside>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoBothSides
