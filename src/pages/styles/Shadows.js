// Packages
import React from "react"
import styled from "styled-components"
import { Font, Variables } from "components-react-julseb"

// Components
import { DemoContainer, DemoContent, DemoCode } from "../../components/DemoContainer"

// Styles
const Square = styled.span`
    --size: 100px;
    width: var(--size);
    height: var(--size);
    display: block;
`

function Shadows(props) {
    return (
        <>
            <Font.H2>Shadow XS</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square style={{ boxShadow: Variables.Shadows.XS }} />
                </DemoContent>

                <DemoCode>{"Variables.Shadows.XS"}</DemoCode>
            </DemoContainer>

            <Font.H2>Shadow S</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square style={{ boxShadow: Variables.Shadows.S }} />
                </DemoContent>

                <DemoCode>{"Variables.Shadows.S"}</DemoCode>
            </DemoContainer>

            <Font.H2>Shadow M</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square style={{ boxShadow: Variables.Shadows.M }} />
                </DemoContent>

                <DemoCode>{"Variables.Shadows.M"}</DemoCode>
            </DemoContainer>

            <Font.H2>Shadow L</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square style={{ boxShadow: Variables.Shadows.L }} />
                </DemoContent>

                <DemoCode>{"Variables.Shadows.L"}</DemoCode>
            </DemoContainer>

            <Font.H2>Shadow XL</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square style={{ boxShadow: Variables.Shadows.XL }} />
                </DemoContent>

                <DemoCode>{"Variables.Shadows.XL"}</DemoCode>
            </DemoContainer>

            <Font.H2>Shadow XXL</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Square style={{ boxShadow: Variables.Shadows.XXL }} />
                </DemoContent>

                <DemoCode>{"Variables.Shadows.XXL"}</DemoCode>
            </DemoContainer>
        </>
    )
}

export default Shadows