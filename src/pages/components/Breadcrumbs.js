// Packages
import React from "react"
import { Breadcrumbs, BreadcrumbsLink, BreadcrumbsActive } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function BreadcrumbsDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Breadcrumbs>
                        <BreadcrumbsLink to="#">Link</BreadcrumbsLink>
                        <BreadcrumbsLink to="#">Link</BreadcrumbsLink>
                        <BreadcrumbsLink to="#">Link</BreadcrumbsLink>
                        <BreadcrumbsActive>Active</BreadcrumbsActive>
                    </Breadcrumbs>
                </DemoContent>

                <DemoCode>
                    {
                        '<Breadcrumbs>\n    <BreadcrumbsLink to="#">Link</BreadcrumbsLink>\n    <BreadcrumbsLink to="#">Link</BreadcrumbsLink>\n    <BreadcrumbsLink to="#">Link</BreadcrumbsLink>\n    <BreadcrumbsActive>Active</BreadcrumbsActive>\n</Breadcrumbs>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>to</td>
                    <td>String</td>
                    <td>/</td>
                    <td>None</td>
                    <td>Yes, only for links</td>
                </tr>
            </TableProps>
        </>
    )
}

export default BreadcrumbsDemo
