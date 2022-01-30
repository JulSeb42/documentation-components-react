// Packages
import React from "react"
import { Font, LinkScroll as Link } from "components-react-julseb"

// Components
import { DemoContainer as Container, DemoContent, DemoCode } from "../DemoContainer"

function DemoContainer(props) {
    return (
        <>
            <Font.H2>Container</Font.H2>

            <Container>
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
            </Container>

            <Font.H2>Container with aside on the left</Font.H2>

            <Container>
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
                        '<Wrapper template="aside-left">\n    <Aside col={2}></Aside>\n\n    <Main col={3}></Main>\n</Wrapper>;\n'
                    }
                </DemoCode>
            </Container>

            <Font.H2>Container with aside on the right</Font.H2>

            <Container>
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
                        '<Wrapper template="aside-right">\n    <Main col={2}></Main>\n\n    <Aside col={3}></Aside>\n</Wrapper>\n'
                    }
                </DemoCode>
            </Container>
        </>
    )
}

export default DemoContainer