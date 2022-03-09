// Packages
import React from "react"
import { Font } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { DemoContainer, DemoCode } from "../../components/DemoContainer"

const OverridesPage = () => {
    return (
        <PageDemo title="Overrides" category="styles">
            <Font.P>
                To override all variables, create a <code>.css</code> file, and
                import it in your <code>index.js</code> file after the
                components library css file:
            </Font.P>

            <DemoContainer>
                <DemoCode>
                    {
                        'import "components-react-julseb/dist/components/index.css"\nimport "./styles/name-of-file.css"'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.P>
                Then, in your new <code>css</code> file, create a{" "}
                <code>:root</code> element and change the variables:
            </Font.P>

            <DemoContainer>
                <DemoCode language="css">
                    {":root {\n    --color-primary-500: #445BE4;\n}"}
                </DemoCode>
            </DemoContainer>
        </PageDemo>
    )
}

export default OverridesPage
