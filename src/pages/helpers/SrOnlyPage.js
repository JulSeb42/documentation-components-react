// Packages
import React from "react"
import { Font, CodeContainer } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"

const SrOnlyPage = () => {
    return (
        <PageDemo title="SrOnly" category="Helpers">
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
        </PageDemo>
    )
}

export default SrOnlyPage
