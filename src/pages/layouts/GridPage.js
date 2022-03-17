// Packages
import React from "react"
import { Variables, Grid } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import GridItem from "../../components/GridItem"

const GridPage = () => {
    const props = [
        {
            name: "col",
            type: "Number",
            example: "6",
            default: "1",
            required: "No",
        },
        {
            name: "gap",
            type: "Number or Variable",
            example: "32",
            default: "Variable.Spacers.L",
            required: "No",
        },
    ]

    return (
        <PageDemo title="Grid" category="layouts" import="Grid">
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
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default GridPage
