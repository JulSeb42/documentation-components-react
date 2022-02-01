// Packages
import React from "react"
import styled from "styled-components"
import { Font, Variables } from "components-react-julseb"

import { DemoContainer, DemoCode } from "../../components/DemoContainer"

const P = styled(Font.P)`
    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Margins.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
    }
`

function OverridesDemo(props) {
    return (
        <>
            <P>
                To override all variables, create a <code>.css</code> file, and
                import it in your <code>index.js</code> file after the
                components library css file:
            </P>

            <DemoContainer>
                <DemoCode>
                    {
                        'import "components-react-julseb/dist/components/index.css"\nimport "./styles/name-of-file.css"'
                    }
                </DemoCode>
            </DemoContainer>

            <P>
                Then, in your new <code>css</code> file, create a{" "}
                <code>:root</code> element and change the variables:
            </P>

            <DemoContainer>
                <DemoCode className="css">
                    {":root {\n    --color-primary-500: #445BE4;\n}"}
                </DemoCode>
            </DemoContainer>
        </>
    )
}

export default OverridesDemo
