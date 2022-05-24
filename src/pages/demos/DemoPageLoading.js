// Imports
import React from "react"
import { PageLoading } from "tsx-library-julseb"

import BaseLayout from "../../components/BaseLayout"

const DemoPageLoading = () => {
    return (
        <BaseLayout title="Demo page loading">
            <PageLoading background="secondary" />
        </BaseLayout>
    )
}

export default DemoPageLoading
