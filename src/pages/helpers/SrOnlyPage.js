// Imports
import React from "react"
import { Font, CodeContainer } from "tsx-library-julseb"

import PageComponent from "../../components/PageComponent"

const SrOnlyPage = () => {
    return (
        <PageComponent title="Sr only" back="/helpers">
            <Font.P>
                Hide elements on every devices except screen readers.
            </Font.P>

            <CodeContainer>
                {
                    'import { SrOnly } from "components-react-julseb"\n\n<SrOnly>Screen reader text</SrOnly>'
                }
            </CodeContainer>

            <Font.P>It can also be used as a CSS class:</Font.P>

            <CodeContainer>
                {'<p className="sr-only">Screen reader text</p>'}
            </CodeContainer>

            <Font.P>
                By default, this component will be wrapped inside a{" "}
                <code>div</code>, but you can change it like this:
            </Font.P>

            <CodeContainer>
                {'<SrOnly as="p">Screen reader text</SrOnly>'}
            </CodeContainer>
        </PageComponent>
    )
}

export default SrOnlyPage
