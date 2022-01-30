// Packages
import React from "react"
import { Grid, Variables } from "components-react-julseb"

function Item(props) {
    return <Grid gap={Variables.Margins.S}>{props.children}</Grid>
}

export default Item
