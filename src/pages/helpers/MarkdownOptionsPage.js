// Imports
import React from "react"
import { Link } from "react-router-dom"
import { Font, CodeContainer } from "tsx-library-julseb"

import PageComponent from "../../components/PageComponent"

const MarkdownOptionsPage = () => {
    return (
        <PageComponent title="Options markdown" back="/helpers">
            <Font.P>
                Options for{" "}
                <Link
                    to="/components/markdown-container"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    MarkdownContainer
                </Link>{" "}
                component.
            </Font.P>

            <CodeContainer language="javascript">
                {
                    'const optionsMarkdown = {\n    forceBlock: true,\n\n    wrapper: "div",\n\n    overrides: {\n        h1: {\n            component: Font.H1,\n        },\n\n        h2: {\n            component: Font.H2,\n        },\n\n        h3: {\n            component: Font.H3,\n        },\n\n        h4: {\n            component: Font.H4,\n        },\n\n        h5: {\n            component: Font.H5,\n        },\n\n        h6: {\n            component: Font.H6,\n        },\n\n        p: {\n            component: Font.P,\n        },\n\n        strong: {\n            component: Font.Strong,\n        },\n\n        em: {\n            component: Font.Em,\n        },\n\n        ul: {\n            component: Font.List,\n        },\n\n        small: {\n            component: Font.Small,\n        },\n    },\n}'
                }
            </CodeContainer>
        </PageComponent>
    )
}

export default MarkdownOptionsPage
