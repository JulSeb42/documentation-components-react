// Packages
import React from "react"

// Components
import PageDemo from "../../components/PageDemo"
import CardShadow from "../../components/CardShadow"

// Data
import allShadows from "../../data/allShadows"

const ShadowsPage = () => {
    return (
        <PageDemo title="Shadows" category="styles" import="Variables">
            {allShadows.map((shadow, i) => (
                <CardShadow shadow={shadow} key={i} />
            ))}
        </PageDemo>
    )
}

export default ShadowsPage
