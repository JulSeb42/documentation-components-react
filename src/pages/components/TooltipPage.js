// Packages
import React from "react"
import { Tooltip, Font } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const TooltipPage = () => {
    const props = [
        {
            name: "text",
            type: "String",
            example: "Text",
            default: "None",
            required: "Yes",
        },
        {
            name: "textStyle",
            type: "String",
            example: "dotted, underline or bold",
            default: "dotted",
            required: "No",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "currentColor",
            required: "No",
        },
        {
            name: "children",
            type: "String",
            example: "Text",
            default: "None",
            required: "Yes",
        },
    ]

    return (
        <PageDemo
            title="Tooltip"
            category="components"
            import="Tooltip"
        >
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
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default TooltipPage
