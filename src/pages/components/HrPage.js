// Packages
import React from "react"
import { Hr } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"

const HrPage = () => {
    return (
        <PageDemo title="Hr" category="components" import="Hr">
            <DemoContainer>
                <DemoContent>
                    <Hr />
                </DemoContent>

                <DemoCode>{"<Hr />"}</DemoCode>
            </DemoContainer>
        </PageDemo>
    )
}

export default HrPage
