// Packages
import React from "react"
import { Breadcrumbs, BreadcrumbsItem } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const BreadcrumbsPage = () => {
    // children, to
    const props = [
        {
            name: "children",
            type: "String",
            example: "Homepage",
            default: "None",
            required: "Yes",
        },
        {
            name: "to (url)",
            type: "String",
            example: "/posts",
            default: "None",
            required: "Yes, except for the last item",
        },
    ]

    return (
        <PageDemo
            title="Breadcrumbs"
            category="components"
            import="Breadcrumbs, BreadcrumbsItem"
        >
            <DemoItem
                code={
                    '<Breadcrumbs>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem>Active</BreadcrumbsItem>\n</Breadcrumbs>'
                }
            >
                <Breadcrumbs>
                    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                    <BreadcrumbsItem>Active</BreadcrumbsItem>
                </Breadcrumbs>
            </DemoItem>
            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default BreadcrumbsPage
