// Packages
import React from "react"
import { Link } from "react-router-dom"
import { Font } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"

const FontPage = () => {
    return (
        <PageDemo title="Font" category="styles" import="Font">
            <Font.P>
                This component library is using{" "}
                <a
                    href="https://fonts.google.com/specimen/Lato?query=lato"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Lato
                </a>{" "}
                for the font.
            </Font.P>

            <Font.P>
                To override this, open your main <code>.css</code> file, and:
            </Font.P>

            <DemoContainer>
                <DemoCode>
                    {
                        '@import url("url-to-your-font");\n\n:root {\n    --font-family-body: your-new-font;\n}'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Titles display</Font.H2>
            <DemoContainer>
                <DemoContent>
                    <Font.H1 display>Font H1 Display</Font.H1>
                    <Font.H2 display>Font H2 Display</Font.H2>
                    <Font.H3 display>Font H3 Display</Font.H3>
                    <Font.H4 display>Font H4 Display</Font.H4>
                    <Font.H5 display>Font H5 Display</Font.H5>
                </DemoContent>

                <DemoCode>
                    {
                        "<Font.H1 display>Font H1 Display</Font.H1>\n<Font.H2 display>Font H2 Display</Font.H2>\n<Font.H3 display>Font H3 Display</Font.H3>\n<Font.H4 display>Font H4 Display</Font.H4>\n<Font.H5 display>Font H5 Display</Font.H5>"
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Titles</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.H1>Font H1</Font.H1>
                    <Font.H2>Font H2</Font.H2>
                    <Font.H3>Font H3</Font.H3>
                    <Font.H4>Font H4</Font.H4>
                    <Font.H5>Font H5</Font.H5>
                    <Font.H6>Font H6</Font.H6>
                </DemoContent>

                <DemoCode>
                    {
                        "<Font.H1>Font H1</Font.H1>\n<Font.H2>Font H2</Font.H2>\n<Font.H3>Font H3</Font.H3>\n<Font.H4>Font H4</Font.H4>\n<Font.H5>Font H5</Font.H5>\n<Font.H6>Font H6</Font.H6>\n"
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Paragraphs</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>Paragraph</Font.P>

                    <Font.P>
                        <Font.Strong>Paragraph strong</Font.Strong>
                    </Font.P>

                    <Font.P>
                        <Font.Em>Paragraph italic</Font.Em>
                    </Font.P>

                    <Font.P>
                        <Link to="#">Link inside paragraph</Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>
                    {
                        '<Font.P>Paragraph</Font.P>\n\n<Font.P>\n    <Font.Strong>Paragraph strong</Font.Strong>\n</Font.P>\n\n<Font.P>\n    <Font.Em>Paragraph italic</Font.Em>\n</Font.P>\n\n<Font.P>\n    <Link to="#">Link inside paragraph</Link>\n</Font.P>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Small</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.Small>Small</Font.Small>
                </DemoContent>

                <DemoCode>{"<Font.Small>Small</Font.Small>"}</DemoCode>
            </DemoContainer>

            <Font.H2>List</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.List>
                        <li>List</li>
                        <li>List</li>
                        <li>List</li>
                        <li>List</li>
                        <li>List</li>
                    </Font.List>
                </DemoContent>

                <DemoCode>
                    {
                        "<Font.List>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n</Font.List>\n"
                    }
                </DemoCode>
            </DemoContainer>
        </PageDemo>
    )
}

export default FontPage
