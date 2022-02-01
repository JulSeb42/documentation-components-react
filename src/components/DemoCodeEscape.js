// Packages
import React from "react"
import styled from "styled-components"

const Container = styled.p`
    white-space: pre-line;
`

function DemoIconMixin(props) {
    return (
        <>
            div:before &#123; $&#123;IconMixin(&#123; icon: "name-of-icon",
            size: 12, color: "black", &#125;)&#125; &#125;
        </>
    )
}

function DemoInputAutocomplete() {
    return (
        <Container>
            
        </Container>
    )
}

export { DemoIconMixin, DemoInputAutocomplete }
