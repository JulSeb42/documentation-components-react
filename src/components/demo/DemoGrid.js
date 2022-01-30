// Packages
import React from "react"
import { Font, Grid, Variables } from "components-react-julseb"
import styled from "styled-components"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../DemoContainer"
import TableProps from "../TableProps"

// Styles
const Item = styled(Font.P)`
    padding: ${Variables.Margins.XS};
    background-color: ${Variables.Colors.Primary500};
    color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.S};
`

function DemoGrid(props) {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Grid col={4} gap={Variables.Margins.XS}>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        "<Grid col={4} gap={Variables.Margins.XS}>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n    <Font.P>Item</Font.P>\n</Grid>"
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>col</td>
                    <td>Number</td>
                    <td>1</td>
                    <td>1</td>
                </tr>

                <tr>
                    <td>gap</td>
                    <td>Value in px, or Variable</td>
                    <td>Variables.Margins.XS</td>
                    <td>Variables.Margins.L</td>
                </tr>
            </TableProps>
        </>
    )
}

export default DemoGrid
