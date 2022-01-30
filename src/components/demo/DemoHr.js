// Packages
import React from "react"
import { Hr } from "components-react-julseb"

// Components
import { DemoContainer, DemoContent, DemoCode } from "../DemoContainer"

function DemoHr(props) {
    return <DemoContainer>
        <DemoContent><Hr /></DemoContent>

        <DemoCode>{"<Hr />"}</DemoCode>
    </DemoContainer>
}

export default DemoHr