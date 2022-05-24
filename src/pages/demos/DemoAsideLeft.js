// Imports
import React from "react"
import { Wrapper, Main, Aside, Font } from "tsx-library-julseb"

import BaseLayout from "../../components/BaseLayout"

const DemoAsideLeft = () => {
    return (
        <BaseLayout title="Demo aside left">
            <Wrapper template="2cols">
                <Aside>
                    <Font.H2>Aside</Font.H2>
                </Aside>

                <Main col={2}>
                    <Font.H1>Main</Font.H1>
                </Main>
            </Wrapper>
        </BaseLayout>
    )
}

export default DemoAsideLeft
