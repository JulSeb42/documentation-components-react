// Imports
import React from "react"
import { Font, MarkdownContainer } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const MarkdownContainerPage = () => {
    const post =
        "## Hello world \n\n I'm some markdown content **compiled** to *jsx*"

    const demo = [
        {
            code: `const post = "## Hello world \\n\\n I'm some markdown content **compiled** to *jsx*"\n\n<MarkdownContainer>{post}</MarkdownContainer>`,
            demo: <MarkdownContainer>{post}</MarkdownContainer>,
        },
    ]

    const props = [
        {
            name: "children",
            type: "Markdown content",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "options",
            type: "Object",
            example: "-",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "gap",
            type: "String or Number",
            example: "24",
            possible: possible.spacers,
            default: "s",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Markdown container"
            back="/components"
            component="MarkdownContainer"
        >
            <Font.P>
                Here, we're using{" "}
                <a
                    href="https://www.npmjs.com/package/markdown-to-jsx"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    markdown-to-jsx
                </a>{" "}
                package. Find all the options on the npm page.
                <br />
                If you want to use our basic options, leave the options blank (
                <Link
                    to="/helpers/options-markdown"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    check them here
                </Link>
                ).
            </Font.P>

            {demo.map(demo => (
                <DemoItem
                    title={demo.title}
                    code={demo.code}
                    subtitle={demo.subtitle}
                    helper={demo.helper}
                    key={uuid()}
                >
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

export default MarkdownContainerPage
