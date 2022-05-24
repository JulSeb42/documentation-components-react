// Imports
import React from "react"
import { Variables, Grid } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import GridItem from "../../components/GridItem"
import possible from "../../data/possible"

const GridPage = () => {
    // Props
    const props = [
        {
            name: "col",
            type: "String or Number",
            example: "5",
            possible:
                "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | any string | any number",
            default: "1",
            required: "No",
        },
        {
            name: "colTablet",
            type: "String",
            example: "1fr",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "colMobile",
            type: "String",
            example: "1fr",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "gap",
            type: "String, Number or Variable",
            example: "48px",
            possible:
                possible.spacers,
            default: "None",
            required: "No",
        },
        {
            name: "rows",
            type: "String",
            example: "min-content 1fr min-content",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "areas",
            type: "String",
            example:
                '"header header header header"\n"main main . sidebar"\n"footer footer footer footer"',
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "justifyItems",
            type: "String",
            example: "start",
            possible: '"start" | "end" | "center" | "stretch"',
            default: "stretch",
            required: "No",
        },
        {
            name: "justifyContent",
            type: "String",
            example: "start",
            possible:
                '"start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly"',
            default: "None",
            required: "No",
        },
        {
            name: "alignItems",
            type: "String",
            example: "center",
            possible: '"start" | "end" | "center" | "stretch"',
            default: "stretch",
            required: "No",
        },
        {
            name: "alignContent",
            type: "String",
            example: "space-between",
            possible:
                '"start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly"',
            default: "stretch",
            required: "No",
        },
        {
            name: "inline",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "padding",
            type: "String, Number or Variable",
            example: "Variables.Spacers.S",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Grid" back="/layouts" component="Grid">
            <DemoItem
                code={
                    "<Grid col={4} gap={Variables.Spacers.S}>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n</Grid>"
                }
            >
                <Grid col={4} gap={Variables.Spacers.S}>
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                </Grid>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default GridPage
