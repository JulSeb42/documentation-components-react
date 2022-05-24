// Imports
import React from "react"
import { Breadcrumbs, BreadcrumbsItem } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const BreadcrumbsPage = () => {
    const demo = [
        {
            code: '<Breadcrumbs icon="chevron-right" colorLink="secondary">\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>\n    <BreadcrumbsItem>Active</BreadcrumbsItem>\n</Breadcrumbs>',
            demo: (
                <Breadcrumbs icon="chevron-right" colorLink="secondary">
                    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                    <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                    <BreadcrumbsItem>Active</BreadcrumbsItem>
                </Breadcrumbs>
            ),
        },
    ]

    const props = [
        {
            name: "icon (Breadcrumbs)",
            type: "String",
            example: "chevron-right",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "colorLink (Breadcrumbs)",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "colorLinkHover (Breadcrumbs)",
            type: "String",
            example: "#C3C3C3",
            possible: "-",
            default: "Variables.Colors.Primary300",
            required: "No",
        },
        {
            name: "colorLinkActive (Breadcrumbs)",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "Variables.Colors.Primary600",
            required: "No",
        },
        {
            name: "align (Breadcrumbs)",
            type: "String",
            example: "center",
            possible:
                '"left" | "center" | "right" | "justify" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"',
            default: "left",
            required: "No",
        },
        {
            name: "to (BreadcrumbsItem)",
            type: "String",
            example: "/",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Breadcrumbs"
            back="/components"
            component="Breadcrumbs, BreadcrumbsItem"
        >
            {demo.map(demo => (
                <DemoItem
                    title={demo.title}
                    code={demo.code}
                    subtitle={demo.subtitle}
                    helper={demo.helper}
                    key={uuid()}
                >
                    {demo.demo}
                </DemoItem>
            ))}

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default BreadcrumbsPage
