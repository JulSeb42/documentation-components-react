// Packages
import React from "react"
import { Font, Icon, Variables, LinkScroll as Link } from "components-react-julseb"
import styled from "styled-components"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"
import { DemoIconMixin } from "../../components/DemoCodeEscape"

const P = styled(Font.P)`
    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Margins.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
    }
`


function IconDemo(props) {
    return (
        <>
            <Font.H2>How to use</Font.H2>
            <P>
                Download SVG icons, and put them in the folder{" "}
                <code>/public/icons</code>. Then you can use this component
                normally.
            </P>
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
                    <DemoIconMixin />
                </DemoCode>
            </DemoContainer>
            <Font.H2>Cool icons libraries</Font.H2>
            <Font.List>
                <li>
                    <Link
                        to="https://boxicons.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Boxicon
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://iconsvg.xyz/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Icons SVG
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://github.com/astrit/css.gg"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        CSS GG
                    </Link>
                </li>
            </Font.List>
        </>
    )
}

export default IconDemo