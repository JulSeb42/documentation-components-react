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

function Container(props) {
    return (
        <>
            <Font.H2>Container</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to="/layouts/container/demo-main"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {
                        "<Wrapper>\n    <Main>\n        Container\n    </Main>\n</Wrapper>"
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Container with aside on the left</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to="/layouts/container/demo-aside-left"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {
                        '<Wrapper template="aside-left">\n    <Aside template="aside-left">\n\n    </Aside>\n\n    <Main template="aside-left">\n        \n    </Main>\n</Wrapper>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Container with aside on the right</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to="/layouts/container/demo-aside-right"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {
                        '<Wrapper template="aside-right">\n    <Main template="aside-right">\n        \n    </Main>\n\n    <Aside template="aside-right">\n    \n    </Aside>\n</Wrapper>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Container with aside on both sides</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to="/layouts/container/demo-both-sides"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {
                        '<Wrapper template="both-sides">\n    <Aside template="both-sides">\n        \n    </Aside>\n\n    <Main template="both-sides">\n        \n    </Main>\n\n    <Aside template="both-sides" last>\n        \n    </Aside>\n</Wrapper>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Container for form pages</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to="/layouts/container/demo-container-form"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {
                        '<Wrapper template="form">\n    <Main>\n        \n    </Main>\n</Wrapper>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>template (Wrapper)</td>
                    <td>String</td>
                    <td>form</td>
                    <td>1col</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>col (Main & Aside)</td>
                    <td>Number</td>
                    <td>2</td>
                    <td>2</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>gap (Main & Aside)</td>
                    <td>String value or variable</td>
                    <td>16px</td>
                    <td>Variables.Margins.L</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default Container