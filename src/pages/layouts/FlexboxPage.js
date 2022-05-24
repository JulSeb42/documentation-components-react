// Imports
import React from "react"
import { Flexbox } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import GridItem from "../../components/GridItem"
import possible from "../../data/possible"

const FlexboxPage = () => {
    // Props
    const props = [
        {
            name: "inline",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "direction",
            type: "String",
            example: "column",
            possible: '"row" | "row-reverse" | "column" | "column-reverse"',
            default: "row",
            required: "No",
        },
        {
            name: "wrap",
            type: "String",
            example: "wrap",
            possible: '"nowrap" | "wrap" | "wrap-reverse"',
            default: "no-wrap",
            required: "No",
        },
        {
            name: "alignItems",
            type: "String",
            example: "flex-end",
            possible:
                '"stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self end"',
            default: "stretch",
            required: "No",
        },
        {
            name: "alignContent",
            type: "String",
            example: "space-between",
            possible:
                '"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "start" | "end" | "baseline" | "first baseline" | "unsafe"',
            default: "None",
            required: "No",
        },
        {
            name: "justifyContent",
            type: "String",
            example: "space-around",
            possible:
                '"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right"',
            default: "flex-start",
            required: "No",
        },
        {
            name: "gap",
            type: "String, Number or Variable",
            example: "Variables.Spacers.L",
            possible: possible.spacers,
            default: "None",
            required: "No",
        },
        {
            name: "padding",
            type: "String, Number or Variable",
            example: "Variables.Spacers.XS",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Flexbox" back="/layouts" component="Flexbox">
            <DemoItem
                code={
                    '<Flexbox gap="xs">\n    <Font.P>Item short</Font.P>\n    <Font.P>Item super long</Font.P>\n    <Font.P>Item taking even more space</Font.P>\n</Flexbox>'
                }
            >
                <Flexbox gap="s">
                    <GridItem>Item short</GridItem>
                    <GridItem>Item super long</GridItem>
                    <GridItem>Item taking even more space</GridItem>
                </Flexbox>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default FlexboxPage
