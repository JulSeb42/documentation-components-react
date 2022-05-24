// Imports
import React from "react"
import { Font, Grid, Alert } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const AlertPage = () => {
    const demo = [
        {
            code: '<Alert color="success" as={Font.P} gap="xxl" radius="l">\n    Content\n</Alert>\n\n<Alert color="danger" as={Font.P}>\n    Content\n</Alert>',
            demo: (
                <Grid gap="s">
                    <Alert color="success" as={Font.P} radius="l">
                        Content
                    </Alert>

                    <Alert color="danger" as={Font.P}>
                        Content
                    </Alert>
                </Grid>
            ),
        },
    ]

    const props = [
        {
            name: "children",
            type: "Any",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "color",
            type: "String",
            example: "success",
            possible:
                '"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | any string',
            default: "danger",
            required: "No",
        },
        {
            name: "borderColor",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "padding",
            type: "String or Number",
            example: "24",
            possible: possible.spacers,
            default: "s",
            required: "No",
        },
        {
            name: "gap",
            type: "String or Number",
            example: "16",
            possible: possible.spacers,
            default: "s",
            required: "No",
        },
        {
            name: "radius",
            type: "String or Number",
            example: "4",
            possible: possible.radiuses,
            default: "m",
            required: "No",
        },
        {
            name: "modal",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Alert" back="/components" component="Alert">
            {demo.map(demo => (
                <DemoItem
                    title={demo.title}
                    code={demo.code}
                    subtitle={demo.subtitle}
                    helper={demo.helper}
                    key={uuid()}
                >
                    {demo.demo}
                </DemoItem>
            ))}

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default AlertPage
