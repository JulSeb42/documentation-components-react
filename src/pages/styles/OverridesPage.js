// Imports
import React from "react"
import { Font, CodeContainer } from "tsx-library-julseb"

import PageComponent from "../../components/PageComponent"

import siteData from "../../data/siteData"

const OverridesPage = () => {
    return (
        <PageComponent title="Overrides" back="/styles" component="Overrides">
            <Font.P>
                To override all variables, create a <code>.css</code> file, and
                import it in your <code>index.js</code> file after the
                components library css file:
            </Font.P>

            <CodeContainer>
                {`${siteData.linkCss}\nimport "./styles/name-of-file.css"`}
            </CodeContainer>

            <Font.P>
                Then, in your new <code>css</code> file, create a{" "}
                <code>:root</code> element and change the variables:
            </Font.P>

            <CodeContainer language="css">
                {":root {\n    --color-primary-500: #445BE4;\n}"}
            </CodeContainer>
        </PageComponent>
    )
}

export default OverridesPage
