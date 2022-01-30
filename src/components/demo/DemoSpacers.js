// Packages
import React from "react"
import styled from "styled-components"
import { Variables } from "components-react-julseb"

// Styles
const Container = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${Variables.Colors.Gray200};

    tr:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.Gray200};
    }

    tr td {
        width: calc(100% / 2);
        padding: ${Variables.Margins.XS};

        &:not(:last-child) {
            border-right: 1px solid ${Variables.Colors.Gray200};
        }
    }
`

const Head = styled.thead`
    background-color: ${Variables.Colors.Primary500};
    color: ${Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Bold};

    tr td:not(:last-child) {
        border-color: ${Variables.Colors.White};
    }
`

const Body = styled.tbody``

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

function DemoSpacers(props) {
    return <Container>
        <Head>
            <tr>
                <td>Name</td>
                <td>Value</td>
            </tr>
        </Head>

        <Body>
            {spacers.map((item, i) => (
                <tr key={i}>
                    <td>Variables.Margins.{item.name}</td>
                    <td>{item.value}px</td>
               </tr>
           ))}
        </Body>
    </Container>
}

export default DemoSpacers