// Imports
import styled from "styled-components"
import { Variables, Font } from "tsx-library-julseb"

const Container = styled(Font.P)`
    padding: ${Variables.Spacers.XS};
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.Primary500};
    border-radius: ${Variables.Radiuses.S};
`

const GridItem = ({ children = "Item" }) => {
    return <Container>{children}</Container>
}

export default GridItem
