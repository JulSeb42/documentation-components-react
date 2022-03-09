// Packages
import { Variables } from "components-react-julseb"
import styled from "styled-components"

// Styles
const Table = styled.table`
    width: 800px;
    border-collapse: collapse;
    border: 1px solid ${Variables.Colors.Gray200};

    tr:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.Gray200};
    }

    tr td {
        width: calc(100% / ${props => props.col || 5});
        padding: ${Variables.Spacers.XS};
        white-space: pre-wrap;
        overflow-x: scroll;
        word-break: break-word;

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
