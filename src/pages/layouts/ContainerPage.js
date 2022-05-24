// Imports
import React from "react"
import { Font } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

import containers from "../../data/containers"

const ContainerPage = () => {
    // Props
    const props = [
        {
            name: "gap (all)",
            type: "String, Number or Variable",
            example: "48px",
            possible: possible.spacers,
            default: "l",
            required: "No",
        },
        {
            name: "padding (all)",
            type: "String, Number or Variable",
            example: "24px",
            possible: "-",
            default: "Variables.Spacers.XXL 0",
            required: "No",
        },
        {
            name: "template (Wrapper)",
            type: "String",
            example: "2cols",
            possible: '"1col" | "2cols" | "3cols"',
            default: "1col",
            required: "No",
        },
        {
            name: "col (Main & Aside)",
            type: "Number",
            example: 2,
            possible: "1 | 2 | 3",
            default: 1,
            required: "No",
        },
        {
            name: "justify (Main & Aside)",
            type: "String",
            example: "end",
            possible:
                '"start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"',
            default: "None",
            required: "No",
        },
        {
            name: "align (Main & Aside)",
            type: "String",
            example: "center",
            possible:
                '"start" | "end" | "center" | "stretch" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"',
            default: "start",
            required: "No",
        },
        {
            name: "width (Main & Aside)",
            type: "String or Number",
            example: "400",
            possible: "-",
            default: "600px (Main), 250px (Aside)",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Container"
            back="/layouts"
            component="Wrapper, Main, Aside"
        >
            {containers.map(item => (
                <DemoItem title={item.title} code={item.code} key={uuid()}>
                    <Font.P>
                        <Link
                            to={item.url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
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

export default ContainerPage
