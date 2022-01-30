// Packages
import React from "react"
import { Hr } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"

function HrDemo(props) {
    return (
        <DemoContainer>
            <DemoContent>
                <Hr />
            </DemoContent>

            <DemoCode>{"<Hr />"}</DemoCode>
        </DemoContainer>
    )
}

export default HrDemo