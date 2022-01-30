// Packages
import React from "react"
import { Font, Grid, Variables } from "components-react-julseb"
import styled from "styled-components"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

// Styles
const Item = styled(Font.P)`
    padding: ${Variables.Margins.XS};
    background-color: ${Variables.Colors.Primary500};
    color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.S};
`

function GridDemo(props) {
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
                    <td>6</td>
                    <td>1</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>gap</td>
                    <td>String value or variable</td>
                    <td>16px</td>
                    <td>24px</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default GridDemo
