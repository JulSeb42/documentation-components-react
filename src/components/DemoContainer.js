// Packages
import React from "react"
import styled from "styled-components"
import Highlight from "react-highlight"
import { Variables } from "components-react-julseb"

// Styles
const DemoContainer = styled.div`
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
`

const DemoContent = styled.div`
    padding: ${Variables.Margins.M};
`

// Styles
const Code = styled(Highlight)`
    font-size: 14px;
`

function DemoCode(props) {
    return (
        <Code className={props.className || "javascript"}>
            {props.children}
        </Code>
    )
}

export { DemoContainer, DemoContent, DemoCode }
