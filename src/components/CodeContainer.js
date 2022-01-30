// Packages
import React from "react"
import Highlight from "react-highlight"
import styled from "styled-components"
// import { Variables } from "components-react-julseb"

// Styles
const Container = styled(Highlight)`
    font-size: 14px;
`

function CodeContainer(props) {
    return (
        <Container className={props.className || "javascript"}>
            {props.children}
        </Container>
    )
}

export default CodeContainer
