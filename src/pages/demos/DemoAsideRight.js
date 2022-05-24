// Imports
import React from "react"
import { Wrapper, Main, Aside, Font } from "tsx-library-julseb"

import BaseLayout from "../../components/BaseLayout"

const DemoAsideRight = () => {
    return (
        <BaseLayout title="Demo aside right">
            <Wrapper template="2cols">
                <Main>
                    <Font.H1>Main</Font.H1>
                </Main>

                <Aside col={2}>
                    <Font.H2>Aside</Font.H2>
                </Aside>
            </Wrapper>
        </BaseLayout>
    )
}

export default DemoAsideRight
