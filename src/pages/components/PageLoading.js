// Packages
import React from "react"
import { Font, LinkScroll as Link } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function PageLoadingDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to="/components/page-loading/demo-page-loading"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {"<PageLoading />"}
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>backgroundcolor</td>
                    <td>String or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default PageLoadingDemo
