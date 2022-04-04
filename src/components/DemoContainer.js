// Packages
import React from "react"
import styled from "styled-components"
import { Variables, CodeContainer } from "components-react-julseb"

// Styles
const DemoContainer = styled.div`
    border: 1px solid ${Variables.Colors.Gray200};
    width: 100%;
`

const DemoContent = styled.div`
    padding: ${Variables.Spacers.M};
`

const DemoCode = props => {
    return (
        <CodeContainer language={props.language || "js"} {...props}>
            {props.children}
        </CodeContainer>
    )
}

export { DemoContainer, DemoContent, DemoCode }
