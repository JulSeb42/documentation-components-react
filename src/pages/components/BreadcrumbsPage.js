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
            name: "icon (Breadcrumbs)",
            type: "String",
            example: "chevron-right",
            default: "None",
            required: "No",
        },
        {
            name: "children (BreadcrumbsItem)",
            type: "String",
            example: "Homepage",
            default: "None",
            required: "Yes",
        },
        {
            name: "to (url) (BreadcrumbsItem)",
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
                title="Without icon"
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

            <DemoItem
                title="With icon"
                code={
                    '<Breadcrumbs icon="chevron-right">\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem>Active</BreadcrumbsItem>\n</Breadcrumbs>'
                }
            >
                <Breadcrumbs icon="chevron-right">
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
