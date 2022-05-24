// Imports
import React from "react"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import CardColor from "../../components/CardColor"

import allColors from "../../data/allColors"

const ColorsPage = () => {
    return (
        <PageComponent title="Colors" back="/styles" component="Variables">
            {allColors.map(color => (
                <CardColor color={color} key={uuid()} />
            ))}
        </PageComponent>
    )
}

export default ColorsPage
