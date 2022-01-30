// Packages
import React from "react"
import styled from "styled-components"
import { Grid, Font, Variables } from "components-react-julseb"

// Data
import allColors from "../data/allColors"

// Styles
const CardColor = styled.div`
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
    padding: ${Variables.Margins.S};
`

function DemoColors() {
    return (
        <Grid>
            {allColors.map((color, i) => (
                <CardColor key={i}>
                    <Square color={color.hex} />

                    <Content>
                        <Font.H4>{color.name}</Font.H4>
                        <Font.P>
                            Variables.Colors.{color.name}
                        </Font.P>
                        <Font.P>
                            <Font.Strong>RGB: </Font.Strong>{color.rgb}
                        </Font.P>
                        <Font.P><Font.Strong>Hex: </Font.Strong>{color.hex}</Font.P>
                    </Content>
                </CardColor>
            ))}
        </Grid>
    )
}

export default DemoColors