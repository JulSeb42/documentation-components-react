// Packages
import React from "react"
import { Helmet, Wrapper, Main, Variables } from "components-react-julseb"
import styled from "styled-components"

// Components
import Header from "./Header"

// Data
import SiteData from "./data/SiteData"

const Container = styled(Wrapper)`
    grid-template-columns: 1fr 800px 1fr;

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: 5vw 1fr 5vw;
    }
`

function Page(props) {
    return (
        <>
            <Helmet
                title={`${props.title} | ${SiteData.Name}`}
                favicon={SiteData.Favicon}
                description={props.description}
                keywords={props.keywords}
                author={SiteData.Author}
                type={SiteData.Type}
                cover={props.cover || SiteData.Cover}
                siteName={SiteData.Name}
                language={SiteData.Language}
            />

            <Header />

            <Container>
                <Main>{props.children}</Main>
            </Container>
        </>
    )
}

export default Page
