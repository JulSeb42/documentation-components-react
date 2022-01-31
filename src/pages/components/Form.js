// Packages
import React from "react"
import { Form, Input } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function FormDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Form btnprimary="Send" btncancel="/">
                        <Input label="Name" />

                        <Input label="Password" password />
                    </Form>
                </DemoContent>

                <DemoCode>
                    {
                        '<Form btnprimary="Send" btncancel="/">\n    <Input label="Name" />\n\n    <Input label="Password" password />\n</Form>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>onSubmit</td>
                    <td>Function</td>
                    <td>handleSubmit</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>btnprimary</td>
                    <td>String</td>
                    <td>Send</td>
                    <td>None</td>
                    <td>Text for submit button, not required</td>
                </tr>
                <tr>
                    <td>loading</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No, only if the form needs to load before submit</td>
                </tr>
                <tr>
                    <td>btncancel</td>
                    <td>String url</td>
                    <td>/</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>textbtncancel</td>
                    <td>String</td>
                    <td>Back</td>
                    <td>Cancel</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>onClickReset</td>
                    <td>Function</td>
                    <td>Close</td>
                    <td>Reset</td>
                    <td>No, only if you need to have a reset button</td>
                </tr>
                <tr>
                    <td>textbtnreset</td>
                    <td>String</td>
                    <td>Close</td>
                    <td>Reset</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default FormDemo
