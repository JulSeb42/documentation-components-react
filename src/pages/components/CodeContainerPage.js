// Imports
import React from "react"
import { Font, CodeContainer } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import { TableProps, TableItem } from "../../components/TableProps"

const CodeContainerPage = () => {
    const props = [
        {
            name: "children",
            type: "String",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "language",
            type: "String",
            example: "html",
            possible: (
                <Font.P>
                    All languages{" "}
                    <a
                        href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        here
                    </a>
                </Font.P>
            ),
            default: "None",
            required: "Yes",
        },
        {
            name: "style",
            type: "String",
            example: "a11yDark",
            possible: (
                <Font.P>
                    All styles{" "}
                    <a
                        href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        here
                    </a>
                </Font.P>
            ),
            default: "atomOneDark",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Code container"
            back="/components"
            component="CodeContainer"
        >
            <Font.P>
                The same component as used on most pages of this website. We're
                using{" "}
                <a
                    href="https://www.npmjs.com/package/react-syntax-highlighter"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-syntax-highlighter
                </a>{" "}
                here. Find all the options and styles on the npm page.
            </Font.P>

            <CodeContainer language="javascript">
                {
                    // eslint-disable-next-line
                    '<CodeContainer language=\"javascript\">\n    {\n        \'const unslugify = str => {\n            return capitalize(str.replaceAll(\"-\", \" \"))\n        }\'\n    }\n</CodeContainer>'
                }
            </CodeContainer>
    
            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default CodeContainerPage
