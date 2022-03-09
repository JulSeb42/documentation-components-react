// Packages
import React, { useState, useEffect } from "react"
import { Font, MarkdownContainer } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const MarkdownContainerPage = () => {
    const props = [
        {
            name: "options",
            type: "Object",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "children",
            type: "Markdown content",
            example: "-",
            default: "None",
            required: "Yes",
        },
    ]

    // Markdown
    const options = {
        forceBlock: true,

        wrapper: "div",

        overrides: {
            h2: {
                component: Font.H2,
            },

            p: {
                component: Font.P,
            },

            strong: {
                component: Font.Strong,
            },

            em: {
                component: Font.Em,
            },
        },
    }

    const [post, setPost] = useState("")

    useEffect(() => {
        import("../demos/DemoMarkdown.md")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    return (
        <PageDemo
            title="MarkdownContainer"
            category="components"
            import="MarkdownContainer"
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
                package. For better performances, import a markdown file as
                showed in the example. Find all the options on the npm page.
            </Font.P>

            <DemoItem
                code={
                    '// Markdown\nconst options = {\n    forceBlock: true,\n\n    wrapper: "div",\n\n    overrides: {\n        h2: {\n            component: Font.H2,\n        },\n\n        p: {\n            component: Font.P,\n        },\n\n        strong: {\n            component: Font.Strong,\n        },\n\n        em: {\n            component: Font.Em,\n        },\n    },\n}\n\nconst [post, setPost] = useState("")\n\nuseEffect(() => {\n    import("../demos/DemoMarkdown.md")\n        .then(res => {\n            fetch(res.default)\n                .then(res => res.text())\n                .then(res => setPost(res))\n                .catch(err => console.log(err))\n        })\n        .catch(err => console.log(err))\n})\n\n<MarkdownContainer options={options}>{post}</MarkdownContainer>'
                }
            >
                <MarkdownContainer options={options}>{post}</MarkdownContainer>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default MarkdownContainerPage
