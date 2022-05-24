// Imports
import React from "react"
import { Font } from "tsx-library-julseb"

import { Container, Square, Content } from "./styles"

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

CardColor.propTypes = {}

export default CardColor
