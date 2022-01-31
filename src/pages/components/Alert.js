// Packages
import React from "react"
import { Alert, Font, Grid, Variables } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function AlertDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.S}>
                        <Alert color="success">
                            <Font.P>Content</Font.P>
                        </Alert>

                        <Alert color="danger">
                            <Font.P>Content</Font.P>
                        </Alert>
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Alert color="success">\n    <Font.P>Content</Font.P>\n</Alert>\n\n<Alert color="danger">\n    <Font.P>Content</Font.P>\n</Alert>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>color</td>
                    <td>String or variable</td>
                    <td>primary, secondary, success, danger, warning</td>
                    <td>success</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>Any</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
            </TableProps>
        </>
    )
}

export default AlertDemo
