// Packages
import React from "react"
import styled from "styled-components"
import Highlight from "react-highlight"
import { Variables } from "components-react-julseb"

// Styles
const DemoContainer = styled.div`
    border: 1px solid ${Variables.Colors.Gray200};
    width: 100%;
`

const DemoContent = styled.div`
    padding: ${Variables.Margins.M};
`

// Styles
const Code = styled(Highlight)`
    font-size: 14px;
    max-width: 100% !important;
    overflow-x: scroll !important;
    white-space: pre-wrap !important;

    & > * {
        max-width: 100% !important;
        overflow-x: scroll !important;
        white-space: pre-wrap !important;
    }
`

function DemoCode(props) {
    return (
        <Code className={props.className || "javascript"}>
            {props.children}
        </Code>
    )
}

export { DemoContainer, DemoContent, DemoCode }
