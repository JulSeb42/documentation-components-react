// Imports
import { Variables } from "tsx-library-julseb"
import styled, { css } from "styled-components"

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${Variables.Colors.Gray200};
    table-layout: fixed;

    tr:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.Gray200};
    }

    tr td {
        width: calc(100% / ${props => props.col || 5});
        padding: ${Variables.Spacers.XS};
        white-space: ${props => (props.wrap ? "pre-wrap" : "pre")};
        overflow-x: scroll;
        vertical-align: top;

        ${props =>
            props.wrap &&
            css`
                word-break: break-word;
            `}

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

export { Table, Head, Body }
