// Imports
import React from "react"
import { Font, CodeContainer, Grid } from "tsx-library-julseb"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const FontPage = () => {
    // Props
    const props = [
        {
            name: "align (all)",
            type: "String",
            example: "center",
            possible:
                '"left" | "center" | "right" | "justify" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"',
            default: "left",
            required: "No",
        },
        {
            name: "color (all)",
            type: "String or Variable",
            example: "Variables.Colors.Primary500",
            possible: possible.colors,
            default: "currentColor",
            required: "No",
        },
        {
            name: "display (headings)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "hidden (H1)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "pre (P)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "gap (List)",
            type: "Number or String or Variable",
            example: "8",
            possible: possible.spacers,
            default: "Variables.Spacers.XXS",
            required: "No",
        },
    ]

    const demo = [
        {
            title: "Titles display",
            code: "<Font.H1 display>Font H1 Display</Font.H1>\n<Font.H2 display>Font H2 Display</Font.H2>\n<Font.H3 display>Font H3 Display</Font.H3>\n<Font.H4 display>Font H4 Display</Font.H4>\n<Font.H5 display>Font H5 Display</Font.H5>",
            demo: (
                <>
                    <Font.H1 display>Font H1 Display</Font.H1>
                    <Font.H2 display>Font H2 Display</Font.H2>
                    <Font.H3 display>Font H3 Display</Font.H3>
                    <Font.H4 display>Font H4 Display</Font.H4>
                    <Font.H5 display>Font H5 Display</Font.H5>
                </>
            ),
        },
        {
            title: "Titles",
            code: "<Font.H1>Font H1</Font.H1>\n<Font.H2>Font H2</Font.H2>\n<Font.H3>Font H3</Font.H3>\n<Font.H4>Font H4</Font.H4>\n<Font.H5>Font H5</Font.H5>\n<Font.H6>Font H6</Font.H6>",
            demo: (
                <>
                    <Font.H1>Font H1</Font.H1>
                    <Font.H2>Font H2</Font.H2>
                    <Font.H3>Font H3</Font.H3>
                    <Font.H4>Font H4</Font.H4>
                    <Font.H5>Font H5</Font.H5>
                    <Font.H6>Font H6</Font.H6>
                </>
            ),
        },
        {
            title: "Paragraphs",
            code: '<Font.P>Paragraph</Font.P>\n\n<Font.P>\n    <Font.Strong>Paragraph strong</Font.Strong>\n</Font.P>\n\n<Font.P>\n    <Font.Em>Paragraph italic</Font.Em>\n</Font.P>\n\n<Font.P>\n    <Link to="#">Link inside paragraph</Link>\n</Font.P>',
            demo: (
                <>
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
                </>
            ),
        },
        {
            title: "Small",
            code: "<Font.Small>Small</Font.Small>",
            demo: <Font.Small>Small</Font.Small>,
        },
        {
            title: "List",
            code: "<Font.List>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n    <li>List</li>\n</Font.List>",
            demo: (
                <Font.List>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                </Font.List>
            ),
        },
    ]

    return (
        <PageComponent title="Font" back="/styles" component="Font">
            <Grid gap="xs">
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
                    To override this, open your main <code>.css</code> file,
                    and:
                </Font.P>

                <CodeContainer language="css">
                    {
                        '@import url("url-to-your-font");\n\n:root {\n    --font-family-body: your-new-font;\n}'
                    }
                </CodeContainer>
            </Grid>

            {demo.map(demo => (
                <DemoItem title={demo.title} code={demo.code} key={uuid()}>
                    {demo.demo}
                </DemoItem>
            ))}

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default FontPage
