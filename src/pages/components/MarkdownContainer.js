// Packages
import React from "react"
import { MarkdownContainer, Font, Variables } from "components-react-julseb"
import styled from "styled-components"

// Components
import {
    DemoContainer,
    DemoContent,
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

function MarkdownContainerDemo() {
    const str = "### Hey\n\nI'm some markdown content!"
    return (
        <>
            <P>
                This component uses{" "}
                <a
                    href="https://www.npmjs.com/package/markdown-to-jsx"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    markdown-to-jsx
                </a>{" "}
                to convert markdown content to JSX content. Check all options on the npm page.
            </P>

            <DemoContainer>
                <DemoContent>
                    <MarkdownContainer>{str}</MarkdownContainer>
                </DemoContent>

                <DemoCode>
                    {
                        'const str = "### Hey \\n\\n I\'m some markdown content!"\n\n<MarkdownContainer>{str}</MarkdownContainer>'
                    }
                </DemoCode>
            </DemoContainer>
        </>
    )
}

export default MarkdownContainerDemo
