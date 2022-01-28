// Packages
import React from "react"
import { Helmet, Wrapper, Main } from "components-react-julseb"

// Components
import Header from "./Header"

// Data
import SiteData from "./data/SiteData"

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

            <Wrapper>
                <Main>{props.children}</Main>
            </Wrapper>
        </>
    )
}

export default Page
