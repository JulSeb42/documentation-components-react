// Packages
import React from "react"
import { ButtonIcon } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function ButtonIconDemo(props) {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <ButtonIcon icon="mail" color="primary" />
                </DemoContent>

                <DemoCode>
                    {'<ButtonIcon icon="mail" color="primary" />'}
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>chevron-right</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>

                <tr>
                    <td>color</td>
                    <td>String value or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>to</td>
                    <td>String</td>
                    <td>/components</td>
                    <td>None</td>
                    <td>No, only if you want to use this button as a Link</td>
                </tr>
            </TableProps>
        </>
    )
}

export default ButtonIconDemo