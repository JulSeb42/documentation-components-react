// Packages
import React from "react"
import styled from "styled-components"
import { Variables, Font } from "components-react-julseb"

// Styles
const Container = styled(Font.P)`
    padding: ${Variables.Spacers.XS};
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.Primary500};
    border-radius: ${Variables.Radiuses.S};
`

const GridItem = () => {
    return <Container>Item</Container>
}

export default GridItem
