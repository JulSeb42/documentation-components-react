// Packages
import React, { useState, useEffect } from "react"
import {
    MarkdownContainer,
    Font,
    LinkScroll as Link,
    Image,
    Grid,
    Variables,
    Button,
} from "components-react-julseb"
import styled from "styled-components"

// Components
import Page from "./Page"
import CodeContainer from "./CodeContainer"
import Item from "./Item"
import { DemoContainer, DemoContent, DemoCode } from "./DemoContainer"

// Demos
import DemoColors from "./demo/DemoColors"
import DemoFonts from "./demo/DemoFonts"
import DemoShadows from "./demo/DemoShadows"
import ContainerDemo from "./demo/DemoContainer"
import DemoGrid from "./demo/DemoGrid"
import DemoSpacers from "./demo/DemoSpacers"
import DemoIcon from "./demo/DemoIcon"
import DemoHr from "./demo/DemoHr"

const P = styled(Font.P)`
    code {
        background-color: ${Variables.Colors.Gray50};
        color: ${Variables.Colors.Primary500};
        font-weight: ${Variables.FontWeights.Bold};
        font-family: ${Variables.FontFamilies.Code};
        line-height: 1.8;
        font-size: 14px;
        padding: 0.2em;
    }
`

// Markdown components
const options = {
    forceBlock: true,
    wrapper: Grid,

    overrides: {
        Font: {
            component: Font,
        },

        h1: {
            component: Font.H1,
        },

        H1: {
            component: Font.H1,
        },

        h2: {
            component: Font.H2,
        },

        H2: {
            component: Font.H2,
        },

        h3: {
            component: Font.H3,
        },

        H3: {
            component: Font.H3,
        },

        h4: {
            component: Font.H4,
        },

        H4: {
            component: Font.H4,
        },

        h5: {
            component: Font.H5,
        },

        H5: {
            component: Font.H5,
        },

        h6: {
            component: Font.H6,
        },

        H6: {
            component: Font.H6,
        },

        p: {
            component: P,
        },

        P: {
            component: P,
        },

        strong: {
            component: Font.Strong,
        },

        Strong: {
            component: Font.Strong,
        },

        em: {
            component: Font.Em,
        },

        Em: {
            component: Font.Em,
        },

        ul: {
            component: Font.List,
        },

        List: {
            component: Font.List,
        },

        small: {
            component: Font.Small,
        },

        Small: {
            component: Font.Small,
        },

        Link: {
            component: Link,
        },

        pre: {
            component: CodeContainer,
        },

        img: {
            component: Image,
        },

        DemoContainer,
        DemoContent,
        DemoCode,

        Item,
        DemoColors,
        CodeContainer,
        DemoFonts,
        DemoShadows,
        ContainerDemo,
        DemoGrid,
        DemoSpacers,
        DemoIcon,
        DemoHr,

        Grid,
    },
}

// Styles
const Container = styled(MarkdownContainer)`
    gap: ${Variables.Margins.L};
`

function MarkdownPage({ title, imports, content, category }) {
    const [post, setPost] = useState("")

    useEffect(() => {
        import(`../markdown/${content.toLowerCase()}.mdx`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    return (
        <Page title={title}>
            <Button
                iconleft="chevron-left"
                btnstyle="text"
                color="primary"
                justify="start"
                nopadding
                to={`/${category}`}
            >
                Back to the list
            </Button>

            <Font.H1>{title}</Font.H1>

            <Font.H2>Import</Font.H2>

            <CodeContainer language="javascript">
                {`import { ${imports} } from "components-react-julseb"`}
            </CodeContainer>

            <Container options={options}>{post}</Container>
        </Page>
    )
}

export default MarkdownPage
