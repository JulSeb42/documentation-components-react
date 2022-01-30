// Packages
import React from "react"
import styled from "styled-components"
import { Font, Variables } from "components-react-julseb"

// Styles
const Container = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${Variables.Colors.Gray200};

    tr:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.Gray200};
    }

    tr td {
        width: calc(100% / 5);
        padding: ${Variables.Margins.XS};
        white-space: pre-wrap;

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

function TableProps(props) {
    return (
        <>
            <Font.H2>Props</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Prop name</td>
                        <td>Prop type</td>
                        <td>Example value</td>
                        <td>Default</td>
                        <td>Required</td>
                    </tr>
                </Head>

                <Body>{props.children}</Body>
            </Container>
        </>
    )
}

export default TableProps
