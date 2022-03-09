// Packages
import React from "react"
import { Loader } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const LoaderPage = () => {
    // size, border, backgroundColor, color, marginLeft, marginRight,
    const props = [
        {
            name: "size",
            type: "Number",
            example: "32",
            default: "48",
            required: "No",
        },
        {
            name: "border (stroke)",
            type: "Number",
            example: "4",
            default: "2",
            required: "No",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "primary",
            required: "No",
        },
        {
            name: "backgroundColor",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "white",
            required: "No",
        },
        {
            name: "marginLeft",
            type: "String value or Variable",
            example: "Variables.Spacers.XS",
            default: "None",
            required: "No",
        },
        {
            name: "marginRight",
            type: "String value or Variable",
            example: "Variables.Spacers.XS",
            default: "None",
            required: "No",
        },
    ]
    
    return (
        <PageDemo title="Loader" category="components" import="Loader">
            <DemoItem
                code={
                    '<Loader size={32} border={4} color="secondary" backgroundColor="white" />'
                }
            >
                <Loader
                    size={32}
                    border={4}
                    color="secondary"
                    backgroundColor="white"
                />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default LoaderPage

