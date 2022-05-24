// Imports
import React from "react"
import { Wrapper, Main, Font } from "tsx-library-julseb"

import BaseLayout from "../../components/BaseLayout"

const DemoMain = () => {
    return (
        <BaseLayout title="Demo main">
            <Wrapper>
                <Main>
                    <Font.H1>Main</Font.H1>
                </Main>
            </Wrapper>
        </BaseLayout>
    )
}

export default DemoMain
