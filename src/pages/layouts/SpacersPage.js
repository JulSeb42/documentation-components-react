// Packages
import React from "react"

// Components
import PageDemo from "../../components/PageDemo"
import { Table, Head, Body } from "../../components/Table"

const SpacersPage = () => {
    const spacers = [
        {
            name: "XXS",
            value: 4,
        },
        {
            name: "XS",
            value: 8,
        },
        {
            name: "S",
            value: 12,
        },
        {
            name: "M",
            value: 16,
        },
        {
            name: "L",
            value: 24,
        },
        {
            name: "XL",
            value: 32,
        },
        {
            name: "XXL",
            value: 48,
        },
    ]
    
    return (
        <PageDemo title="Spacers" category="layouts" import="Variables">
            <Table>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {spacers.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Spacers.{item.name}</td>
                            <td>{item.value}px</td>
                        </tr>
                    ))}
                </Body>
            </Table>
        </PageDemo>
    )
}

export default SpacersPage

