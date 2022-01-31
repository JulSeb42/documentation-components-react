// Packages
import React from "react"
import { ProgressBar, Grid, Variables } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function ProgressBarDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.S}>
                        <ProgressBar value={68} color="primary" />
                        <ProgressBar value={38} color="secondary" />
                        <ProgressBar value={54} color="success" />
                        <ProgressBar value={12} color="danger" />
                        <ProgressBar value={89} color="warning" />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<ProgressBar value={68} color="primary" />\n<ProgressBar value={38} color="secondary" />\n<ProgressBar value={54} color="success" />\n<ProgressBar value={12} color="danger" />\n<ProgressBar value={89} color="warning" />'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>value</td>
                    <td>Number</td>
                    <td>42</td>
                    <td>None</td>
                    <td>Yes, value on 100</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>String or variable</td>
                    <td>primary, secondary, success, danger, warning</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default ProgressBarDemo
