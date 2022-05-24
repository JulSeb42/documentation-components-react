// Imports
import React from "react"
import { Wrapper, Main, Aside, Font } from "tsx-library-julseb"

import BaseLayout from "../../components/BaseLayout"

const DemoBothSides = () => {
    return (
        <BaseLayout title="Demo both sides">
            <Wrapper template="3cols">
                <Aside col={1}>
                    <Font.H2>Aside</Font.H2>
                </Aside>

                <Main col={2}>
                    <Font.H1>Main</Font.H1>
                </Main>

                <Aside col={3}>
                    <Font.H2>Aside</Font.H2>
                </Aside>
            </Wrapper>
        </BaseLayout>
    )
}

export default DemoBothSides
