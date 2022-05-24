// Imports
import React from "react"
import { Helmet } from "tsx-library-julseb"

import Header from "./Header"

import siteData from "../data/siteData"

const BaseLayout = ({ title, children, description, keywords, cover }) => {
    return (
        <>
            <Helmet
                title={`${title} | ${siteData.name}`}
                description={description}
                keywords={[siteData.keywords, keywords]}
                siteName={siteData.name}
                favicon={siteData.favicon}
                author={siteData.author}
                type={siteData.type}
                cover={cover || siteData.cover}
                language={siteData.language}
            />

            <Header />

            {children}
        </>
    )
}

export default BaseLayout
