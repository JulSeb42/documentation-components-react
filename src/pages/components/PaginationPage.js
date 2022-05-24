// Imports
import React from "react"
import { Pagination, PaginationButton } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const PaginationPage = () => {
    const demo = [
        {
            code: "<Pagination>\n    <PaginationButton prev disabled />\n    <PaginationButton number={1} active />\n    <PaginationButton number={2} />\n    <PaginationButton number={3} />\n    <PaginationButton number={4} />\n    <PaginationButton number={5} />\n    <PaginationButton more />\n    <PaginationButton number={20} />\n    <PaginationButton next />\n</Pagination>",
            demo: (
                <Pagination>
                    <PaginationButton prev disabled />
                    <PaginationButton number={1} active />
                    <PaginationButton number={2} />
                    <PaginationButton number={3} />
                    <PaginationButton number={4} />
                    <PaginationButton number={5} />
                    <PaginationButton more />
                    <PaginationButton number={20} />
                    <PaginationButton next />
                </Pagination>
            ),
        },
    ]

    const props = [
        {
            name: "justifyContent (Pagination)",
            type: "String",
            example: "flex-end",
            possible:
                '"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right"',
            default: "center",
            required: "No",
        },
        {
            name: "onClick (PaginationButton)",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "active (PaginationButton)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "number (PaginationButton)",
            type: "Number",
            example: "4",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "next (PaginationButton)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "prev (PaginationButton)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "more (PaginationButton)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "disabled (PaginationButton)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "customIconNext (PaginationButton)",
            type: "String",
            example: "arrow-right",
            possible: "-",
            default: "chevron-right",
            required: "No",
        },
        {
            name: "customIconPrev (PaginationButton)",
            type: "String",
            example: "arrow-left",
            possible: "-",
            default: "chevron-left",
            required: "No",
        },
        {
            name: "customIconMore (PaginationButton)",
            type: "String",
            example: "more",
            possible: "-",
            default: "dots-horizontal-rounded",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Pagination"
            back="/components"
            component="Pagination, PaginationButton"
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

export default PaginationPage
