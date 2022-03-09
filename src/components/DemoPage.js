// Packages
import React from "react"
import { Helmet } from "components-react-julseb"

// Components
import Header from "./Header"

// Data
import siteData from "../data/siteData"

const DemoPage = props => {
    return (
        <>
            <Helmet
                title={`${props.title} | ${siteData.name}`}
                favicon={siteData.favicon}
                description={props.description}
                keywords={props.keywords}
                author={siteData.author}
                type={siteData.type}
                cover={props.cover || siteData.cover}
                siteName={siteData.name}
                language={siteData.language}
            />

            <Header />

            {props.children}
        </>
    )
}

export default DemoPage
