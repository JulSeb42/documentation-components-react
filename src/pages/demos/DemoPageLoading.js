// Packages
import React from "react"
import DemoPage from "../../components/DemoPage"
import { PageLoading } from "components-react-julseb"

const DemoPageLoading = () => {
    return (
        <DemoPage title="Page Loading">
            <PageLoading backgroundColor="secondary" />
        </DemoPage>
    )
}

export default DemoPageLoading
