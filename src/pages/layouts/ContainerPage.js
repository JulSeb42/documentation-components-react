// Packages
import React from "react"

// Components
import PageDemo from "../../components/PageDemo"
import CardContainer from "../../components/CardContainer"
import { TableProps, TableItem } from "../../components/TableProps"

// Data
import containers from "../../data/containers"

const ContainerPage = () => {
    const props = [
        {
            name: "template (Wrapper, Main & Aside)",
            type: "String",
            example: "form",
            default: "1col",
            required: "No",
        },
        {
            name: "gap (Wrapper)",
            type: "Number or Variable",
            example: "24",
            default: "Variables.Spacers.L",
            required: "No",
        },
        {
            name: "gap (Main & Aside)",
            type: "Number or Variable",
            example: "24",
            default: "Variables.Spacers.L",
            required: "No",
        },
    ]

    return (
        <PageDemo
            title="Container"
            category="layouts"
            import="Wrapper, Main, Aside"
        >
            {containers.map((item, i) => (
                <CardContainer item={item} key={i} />
            ))}

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ContainerPage
