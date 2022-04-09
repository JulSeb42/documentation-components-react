// Packages
import React from "react"
import { Link } from "react-router-dom"
import { Font } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { DemoContainer, DemoCode } from "../../components/DemoContainer"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const FontPage = () => {
    // , , , 
    const props = [
        {
            name: "color (all)",
            type: "Variable or String",
            example: "Variables.Colors.Black",
            default: "currentColor",
            required: "No",
        },
        {
            name: "display (H1, H2, H3, H4, H5)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "pre (P)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "gap (List)",
            type: "Variable or Number",
            example: "2",
            default: "Variables.Spacers.XXS",
            required: "No",
        },
    ]

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

            <DemoItem
                title="Titles display"
                code={
                    "<Font.H1 display>Font H1 Display</Font.H1>\n<Font.H2 display>Font H2 Display</Font.H2>\n<Font.H3 display>Font H3 Display</Font.H3>\n<Font.H4 display>Font H4 Display</Font.H4>\n<Font.H5 display>Font H5 Display</Font.H5>"
                }
            >
                <Font.H1 display>Font H1 Display</Font.H1>
                <Font.H2 display>Font H2 Display</Font.H2>
                <Font.H3 display>Font H3 Display</Font.H3>
                <Font.H4 display>Font H4 Display</Font.H4>
                <Font.H5 display>Font H5 Display</Font.H5>
            </DemoItem>

            <DemoItem
                title="Titles"
                code={
                    "<Font.H1>Font H1</Font.H1>\n<Font.H2>Font H2</Font.H2>\n<Font.H3>Font H3</Font.H3>\n<Font.H4>Font H4</Font.H4>\n<Font.H5>Font H5</Font.H5>\n<Font.H6>Font H6</Font.H6>\n"
                }
            >
                <Font.H1>Font H1</Font.H1>
                <Font.H2>Font H2</Font.H2>
                <Font.H3>Font H3</Font.H3>
                <Font.H4>Font H4</Font.H4>
                <Font.H5>Font H5</Font.H5>
                <Font.H6>Font H6</Font.H6>
            </DemoItem>

            <DemoItem
                title="Paragraphs"
                code={
                    '<Font.P>Paragraph</Font.P>\n\n<Font.P>\n    <Font.Strong>Paragraph strong</Font.Strong>\n</Font.P>\n\n<Font.P>\n    <Font.Em>Paragraph italic</Font.Em>\n</Font.P>\n\n<Font.P>\n    <Link to="#">Link inside paragraph</Link>\n</Font.P>'
                }
            >
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
            </DemoItem>

            <DemoItem title="Small" code={"<Font.Small>Small</Font.Small>"}>
                <Font.Small>Small</Font.Small>
            </DemoItem>

            <DemoItem
                title="List"
                code={
                    "<Font.List>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n</Font.List>\n"
                }
            >
                <Font.List>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                </Font.List>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default FontPage
