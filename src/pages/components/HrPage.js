// Packages
import React from "react"
import { Hr } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const HrPage = () => {
    const props = {
        name: "color",
        type: "Variable or String",
        example: "blue",
        default: "Variables.Colors.Gray200",
        required: "No",
    }

    return (
        <PageDemo title="Hr" category="components" import="Hr">
            <DemoItem code={"<Hr />"}>
                <Hr />
            </DemoItem>

            <TableProps>
                <TableItem item={props} />
            </TableProps>
        </PageDemo>
    )
}

export default HrPage
