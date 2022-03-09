// Packages
import React from "react"
import { Hr } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"

const HrPage = () => {
    return (
        <PageDemo title="Hr" category="components" import="Hr">
            <DemoItem code={"<Hr />"}>
                <Hr />
            </DemoItem>
        </PageDemo>
    )
}

export default HrPage
