// Packages
import React from "react"
import { ProgressBar } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ProgressBarPage = () => {
    const props = [
        {
            name: "value",
            type: "Number",
            example: "42",
            default: "None",
            required: "Yes",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "primary",
            required: "No",
        },
        {
            name: "height",
            type: "Number",
            example: "24",
            default: "16",
            required: "No",
        },
    ]
    
    return (
        <PageDemo
            title="ProgressBar"
            category="components"
            import="ProgressBar"
        >
            <DemoItem code={'<ProgressBar value={45} color="secondary" />'}>
                <ProgressBar value={45} color="secondary" />
            </DemoItem>
            
            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ProgressBarPage

