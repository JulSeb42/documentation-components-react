// Packages
import React from "react"
import { Font, Icon } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../DemoContainer"
import TableProps from "../TableProps"

function DemoIcon(props) {
    return (
        <>
            <Font.H2>Icon component</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Icon name="package" size={48} color="red" />
                </DemoContent>

                <DemoCode>
                    {'<Icon name="package" size={48} color="red" />'}
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>name</td>
                    <td>String</td>
                    <td>chevron-left</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>

                <tr>
                    <td>size</td>
                    <td>Number</td>
                    <td>32</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>

                <tr>
                    <td>color</td>
                    <td>String or variable</td>
                    <td>blue</td>
                    <td>currentColor</td>
                    <td>No</td>
                </tr>
            </TableProps>

            <Font.H2>Icon mixin</Font.H2>

            <Font.P>You can also use a mixin with styled-components:</Font.P>

            <DemoContainer>
                <DemoCode>
                    {'import { IconMixin } from "components-react-julseb"'}
                </DemoCode>
            </DemoContainer>

            <DemoContainer>
                <DemoCode>
                    {
                        'div:before {\n    ${IconMixin({\n        icon: "name-of-icon",\n        size: 12,\n        color: "black",\n    })}\n}'
                    }
                </DemoCode>
            </DemoContainer>
        </>
    )
}

export default DemoIcon