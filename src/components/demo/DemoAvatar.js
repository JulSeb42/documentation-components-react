// Packages
import React from "react"
import { Avatar, Font } from "components-react-julseb"

// Components
import { DemoContainer, DemoContent, DemoCode } from "../DemoContainer"
import TableProps from "../TableProps"

function DemoAvatar(props) {
    return (
        <>
            <Font.H2>Avatar with image</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Avatar
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                        alt="Avatar"
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Avatar" />'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Avatar with letter</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Avatar>A</Avatar>
                </DemoContent>

                <DemoCode>{"<Avatar>A</Avatar>"}</DemoCode>
            </DemoContainer>

            <Font.H2>Avatar with icon</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Avatar icon="user" />
                </DemoContent>

                <DemoCode>{'<Avatar icon="user" />'}</DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>size</td>
                    <td>Number</td>
                    <td>24</td>
                    <td>48</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>background</td>
                    <td>String value or variable</td>
                    <td>Variables.Colors.Secondary500</td>
                    <td>Variables.Colors.Primary500</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>color</td>
                    <td>String value or variable</td>
                    <td>Variables.Colors.Black</td>
                    <td>Variables.Colors.White</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>src</td>
                    <td>String</td>
                    <td>https://image.com</td>
                    <td>None</td>
                    <td>Yes if you want to use an image</td>
                </tr>

                <tr>
                    <td>alt</td>
                    <td>String</td>
                    <td>Avatar picture</td>
                    <td>None</td>
                    <td>Yes if you want to use an image</td>
                </tr>

                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>user</td>
                    <td>None</td>
                    <td>Yes if you want to use an icon</td>
                </tr>

                <tr>
                    <td>children</td>
                    <td>String</td>
                    <td>B</td>
                    <td>None</td>
                    <td>Yes if you want to use a letter</td>
                </tr>
            </TableProps>
        </>
    )
}

export default DemoAvatar
