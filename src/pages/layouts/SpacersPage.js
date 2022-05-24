// Imports
import React from "react"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import { Table, Head, Body } from "../../components/Table"
import allSpacers from "../../data/allSpacers"

const SpacersPage = () => {
    return (
        <PageComponent title="Spacers" back="/layouts" component="Variables">
            <Table>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allSpacers.map(spacer => (
                        <tr key={uuid()}>
                            <td>Variables.Spacers.{spacer.name}</td>
                            <td>{spacer.value}</td>
                        </tr>
                    ))}
                </Body>
            </Table>
        </PageComponent>
    )
}

export default SpacersPage
