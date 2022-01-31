// Packages
import React from "react"
import { PageLoading as Loader } from "components-react-julseb"

// Components
import DemoPage from "../../components/DemoPage"

function PageLoading(props) {
    return (
        <DemoPage title="Page Loading">
            <Loader />
        </DemoPage>
    )
}

export default PageLoading
