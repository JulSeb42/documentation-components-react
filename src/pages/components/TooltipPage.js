// Imports
import React from "react"
import { Font, Tooltip } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const TooltipPage = () => {
    // Props
    const props = [
        {
            name: "text",
            type: "String",
            example: "Tooltip text",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "textStyle",
            type: "String",
            example: "underline",
            possible: '"dotted" | "underline" | "bold"',
            default: "dotted",
            required: "No",
        },
        {
            name: "color",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Tooltip" back="/components" component="Tooltip">
            <DemoItem
                code={
                    '<Font.P>\n    Text with <Tooltip text="Tooltip">tooltip</Tooltip> text\n</Font.P>'
                }
            >
                <Font.P>
                    Text with <Tooltip text="Tooltip">tooltip</Tooltip> text
                </Font.P>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default TooltipPage
