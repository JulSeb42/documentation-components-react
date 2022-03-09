// Packages
import React from "react"
import styled from "styled-components"
import { Variables, Font } from "components-react-julseb"

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
    padding: ${Variables.Spacers.S};
`

const CardColor = ({ color }) => {
    return (
        <Container>
            <Square color={color.hex} />

            <Content>
                <Font.H4>{color.name}</Font.H4>
                <Font.P>Variables.Colors.{color.name}</Font.P>
                <Font.P>
                    <Font.Strong>CSS:</Font.Strong> {color.css}
                </Font.P>
                <Font.P>
                    <Font.Strong>RGB: </Font.Strong>
                    {color.rgb}
                </Font.P>
                <Font.P>
                    <Font.Strong>Hex: </Font.Strong>
                    {color.hex}
                </Font.P>
            </Content>
        </Container>
    )
}

export default CardColor
