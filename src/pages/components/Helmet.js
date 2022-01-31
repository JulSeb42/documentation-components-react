// Packages
import React from "react"
import { Font, Variables } from "components-react-julseb"
import styled from "styled-components"

// Components
import {
    DemoContainer,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

const P = styled(Font.P)`
    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Margins.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
    }
`

function HelmetDemo() {
    return (
        <>
            <P>
                A component for{" "}
                <a
                    href="https://www.npmjs.com/package/react-helmet"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-helmet
                </a>
                .
            </P>

            <DemoContainer>
                <DemoCode>{'<Helmet title="Page title" />'}</DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>siteName</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>favicon</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes (meta description)</td>
                </tr>
                <tr>
                    <td>keywords</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>author</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>cover</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>language</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>Any</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default HelmetDemo
