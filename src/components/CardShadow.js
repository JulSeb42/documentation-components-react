// Packages
import React from "react"
import styled from "styled-components"
import { Font } from "components-react-julseb"

// Components
import { DemoContainer, DemoContent, DemoCode } from "./DemoContainer"

// Styles
const Square = styled.span`
    --size: 100px;
    width: var(--size);
    height: var(--size);
    display: block;
    box-shadow: ${props => props.shadow};
`

const CardShadow = ({ shadow }) => {
    return (
        <>
            <Font.H2>Shadow {shadow.name}</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square shadow={shadow.css} />
                </DemoContent>

                <DemoCode>{`Variables.Shadows.${shadow.name}`}</DemoCode>
            </DemoContainer>
        </>
    )
}

export default CardShadow
