// Imports
import React from "react"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import SquareShadow from "../../components/SquareShadow"

import allShadows from "../../data/allShadows"

const ShadowsPage = () => {
    return (
        <PageComponent title="Shadows" back="/styles" component="Variables">
            {allShadows.map(shadow => (
                <DemoItem
                    title={`Shadow ${shadow.name}`}
                    code={`Variables.Shadows.${shadow.name}`}
                    key={uuid()}
                >
                    <SquareShadow shadow={shadow.value} />
                </DemoItem>
            ))}
        </PageComponent>
    )
}

export default ShadowsPage
