// Packages
import React from "react"
import { Font, CodeContainer } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { TableProps, TableItem } from "../../components/TableProps"

const CodeContainerPage = () => {
    const props = [
        {
            name: "language",
            type: "String",
            example: "html",
            default: "None",
            required: "Yes",
        },
        {
            name: "children",
            type: "String",
            example: "-",
            default: "None",
            required: "Yes",
        },
    ]

    return (
        <PageDemo
            title="CodeContainer"
            category="components"
            import="CodeContainer"
        >
            <Font.P>
                The same component as used on most pages of this website. We're
                using{" "}
                <a
                    href="https://www.npmjs.com/package/react-lowlight"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-lowlight
                </a>{" "}
                here. For each language, you need to register them as showed in
                the example, and these languages are already registered:{" "}
                <code>html, css, scss, js, shell</code>.
            </Font.P>

            <CodeContainer>
                {
                    'import javascript from "highlight.js/lib/languages/javascript"\n\nLowlight.registerLanguage("js", javascript)\n\n<CodeContainer language="js">\n    {"const unslugify = str => {\n        return capitalize(str.replaceAll("-", " "))\n    }"}\n</CodeContainer>'
                }
            </CodeContainer>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default CodeContainerPage
