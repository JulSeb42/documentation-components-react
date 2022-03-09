// Packages
import React from "react"

// Components
import PageDemo from "../../components/PageDemo"
import CardColor from "../../components/CardColor"

// Data
import allColors from "../../data/allColors"

const ColorsPage = () => {
    return (
        <PageDemo title="Colors" category="styles" import="Variables">
            {allColors.map((color, i) => (
                <CardColor color={color} key={i} />
            ))}
        </PageDemo>
    )
}

export default ColorsPage
