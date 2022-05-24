// Imports
import React from "react"
import { Hr } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const HrPage = () => {
    // Props
    const props = [
        {
            name: "height",
            type: "Number",
            example: "2",
            possible: "-",
            default: "1",
            required: "No",
        },
        {
            name: "color",
            type: "String or Variable",
            example: "secondary",
            possible: possible.colors,
            default: "Variables.Colors.Gray200",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Hr" back="/components" component="Hr">
            <DemoItem code={"<Hr />"}>
                <Hr />
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default HrPage
