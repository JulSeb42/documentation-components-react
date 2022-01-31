// Packages
import React from "react"
import { Loader } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function LoaderDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Loader
                        size={32}
                        border={4}
                        color="secondary"
                        backgroundcolor="white"
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Loader size={32} border={4} color="secondary" backgroundcolor="white" />'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>size</td>
                    <td>Number</td>
                    <td>32</td>
                    <td>48</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>border (thickness of the border)</td>
                    <td>Number</td>
                    <td>8</td>
                    <td>2</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>String value or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>backgroundcolor</td>
                    <td>String value or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>white</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default LoaderDemo
