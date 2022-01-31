// Packages
import React from "react"
import { Toast, Font, Variables } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function ToastDemo() {
    return (
        <>
            <Font.H2>Title only</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Toast title="Title" />
                </DemoContent>

                <DemoCode>{'<Toast title="Title" />'}</DemoCode>
            </DemoContainer>

            <Font.H2>Title and body</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Toast title="Title">Message</Toast>
                </DemoContent>

                <DemoCode>{'<Toast title="Title">Message</Toast>'}</DemoCode>
            </DemoContainer>

            <Font.H2>Title with icon</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Toast
                        title="Title"
                        icon="check-circle"
                        iconcolor={Variables.Colors.Success500}
                    >
                        Message
                    </Toast>
                </DemoContent>

                <DemoCode>
                    {
                        '<Toast\n    title="Title"\n    icon="check-circle"\n    iconcolor={Variables.Colors.Success500}\n>\n    Message\n</Toast>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Title with close button</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Toast
                        title="Title"
                        icon="check-circle"
                        iconcolor={Variables.Colors.Success500}
                        close
                    >
                        Message
                    </Toast>
                </DemoContent>

                <DemoCode>
                    {
                        '<Toast\n    title="Title"\n    icon="check-circle"\n    iconcolor={Variables.Colors.Success500}\n    close\n>\n    Message\n</Toast>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>Alert</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>String</td>
                    <td>Your message was sent</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>check</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>iconcolor</td>
                    <td>String or variable</td>
                    <td>Variables.Colors.Danger500</td>
                    <td>None</td>
                    <td>Only if you want to use an icon</td>
                </tr>
                <tr>
                    <td>close</td>
                    <td>Function</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default ToastDemo
