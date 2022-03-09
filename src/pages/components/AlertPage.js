// Packages
import React from "react"
import { Font, Variables, Grid, Alert } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const AlertPage = () => {
    const props = [
        {
            name: "children",
            type: "Any",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "success",
            required: "No",
        },
    ]
    
    return (
        <PageDemo title="Alert" category="components" import="Alert">
            <DemoItem
                code={
                    '<Alert color="success">\n    <Font.P>Content</Font.P>\n</Alert>\n\n<Alert color="danger">\n    <Font.P>Content</Font.P>\n</Alert>'
                }
            >
                <Grid gap={Variables.Spacers.S}>
                    <Alert color="success">
                        <Font.P>Content</Font.P>
                    </Alert>

                    <Alert color="danger">
                        <Font.P>Content</Font.P>
                    </Alert>
                </Grid>
            </DemoItem>
            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default AlertPage

