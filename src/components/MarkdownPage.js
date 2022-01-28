// Packages
import React, { useState, useEffect } from "react"
import {
    MarkdownContainer,
    Font,
    LinkScroll as Link,
    Image,
    Grid,
    Variables,
} from "components-react-julseb"
import styled from "styled-components"

// Components
import Page from "./Page"
import CodeContainer from "./CodeContainer"

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

        p: {
            component: Font.P,
        },

        P: {
            component: Font.P,
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

        Grid,
    },
}

// Styles
const Container = styled(MarkdownContainer)`
    gap: ${Variables.Margins.L};
`

function MarkdownPage({ title, content }) {
    const [post, setPost] = useState("")

    useEffect(() => {
        import(`../markdown/${content.toLowerCase()}.md`)
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
            <Container options={options}>{post}</Container>
        </Page>
    )
}

export default MarkdownPage
