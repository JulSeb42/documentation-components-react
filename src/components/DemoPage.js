// Packages
import React from "react"
import { Helmet } from "components-react-julseb"

// Components
import Header from "./Header"

// Data
import SiteData from "./data/SiteData"

function DemoPage(props) {
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

            {props.children}
        </>
    )
}

export default DemoPage