// Imports
import styled from "styled-components"

const SquareShadow = styled.span`
    --size: 100px;
    width: var(--size);
    height: var(--size);
    display: block;
    box-shadow: ${props => props.shadow};
`

export default SquareShadow
