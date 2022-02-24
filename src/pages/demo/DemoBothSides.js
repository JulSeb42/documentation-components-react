// Packages
import React from "react"
import { Wrapper, Main, Font, Aside } from "components-react-julseb"
import DemoPage from "../../components/DemoPage"

function DemoBothSides(props) {
    return (
        <DemoPage title="Demo Both sides">
            <Wrapper template="both-sides">
                <Aside col={2} template="both-sides">
                    <Font.P>Aside left</Font.P>
                </Aside>
                
                <Main col={3} template="both-sides">
                    <Font.P>Main</Font.P>
                </Main>
                
                <Aside col={4} template="both-sides">
                    <Font.P>Aside right</Font.P>
                </Aside>
            </Wrapper>
        </DemoPage>
    )
}

export default DemoBothSides
