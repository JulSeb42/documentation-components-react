// Packages
import React from "react"
import { Pagination, PaginationButton } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const PaginationPage = () => {
    // number, prev, more, next, active, disabled
    const props = [
        {
            name: "number",
            type: "Number",
            example: "4",
            default: "None",
            required: "No",
        },
        {
            name: "prev",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "next",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "more",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "active",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
    ]

    return (
        <PageDemo
            title="Pagination"
            category="components"
            import="Pagination, PaginationButton"
        >
            <DemoItem
                code={
                    "<Pagination>\n    <PaginationButton prev disabled />\n    <PaginationButton number={1} active />\n    <PaginationButton number={2} />\n    <PaginationButton number={3} />\n    <PaginationButton number={4} />\n    <PaginationButton number={5} />\n    <PaginationButton more />\n    <PaginationButton number={20} />\n    <PaginationButton next />\n</Pagination>"
                }
            >
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
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default PaginationPage
