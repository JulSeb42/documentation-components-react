// Packages
import styled from "styled-components"

// Components
import { Variables } from "tsx-library-julseb"

// Styles
const Container = styled.div`
    width: 100%;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.M};
    display: flex;
    align-items: center;
    overflow: hidden;
`

const Square = styled.span`
    --size: 150px;
    width: var(--size);
    height: var(--size);
    background-color: ${props => props.color};
`

const Content = styled.div`
    padding: ${Variables.Spacers.XS};
`

export { Container, Square, Content }
