// Packages
import React from "react"
import { Variables, Grid } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
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
            <DemoContainer>
                <DemoContent>
                    <Grid col={4} gap={Variables.Spacers.S}>
                        <GridItem />
                        <GridItem />
                        <GridItem />
                        <GridItem />
                        <GridItem />
                        <GridItem />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        "<Grid col={4} gap={Variables.Spacers.S}>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n</Grid>"
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default GridPage
