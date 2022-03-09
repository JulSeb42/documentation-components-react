// Packages
import React from "react"
import { Grid, Badge } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const BadgePage = () => {
    const props = [
        {
            name: "children",
            type: "String",
            example: "3",
            default: "None",
            required: "No, only if you want a number or letter inside",
        },
        {
            name: "icon",
            type: "String",
            example: "star",
            default: "None",
            required: "No, only if you want an icon inside",
        },
        {
            name: "size",
            type: "Number",
            example: "48",
            default: "16",
            required: "No",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "primary",
            required: "No",
        },
        {
            name: "textColor",
            type: "String value or Variable",
            example: "#000",
            default: "Variables.Colors.White",
            required: "No",
        },
    ]

    return (
        <PageDemo title="Badge" category="components" import="Badge">
            <DemoItem
                title="Empty"
                code={
                    '<Badge color="primary" />\n\n<Badge color="secondary" />\n\n<Badge color="success" />\n\n<Badge color="danger" />\n\n<Badge color="warning" />'
                }
            >
                <Grid col={8}>
                    <Badge color="primary" />
                    <Badge color="secondary" />
                    <Badge color="success" />
                    <Badge color="danger" />
                    <Badge color="warning" />
                </Grid>
            </DemoItem>

            <DemoItem
                title="With number"
                code={
                    '<Badge color="primary" size={32}>1</Badge>\n\n<Badge color="secondary" size={32}>1</Badge>\n\n<Badge color="success" size={32}>1</Badge>\n\n<Badge color="danger" size={32}>1</Badge>\n\n<Badge color="warning" size={32}>1</Badge>'
                }
            >
                <Grid col={8}>
                    <Badge color="primary" size={32}>
                        1
                    </Badge>
                    <Badge color="secondary" size={32}>
                        1
                    </Badge>
                    <Badge color="success" size={32}>
                        1
                    </Badge>
                    <Badge color="danger" size={32}>
                        1
                    </Badge>
                    <Badge color="warning" size={32}>
                        1
                    </Badge>
                </Grid>
            </DemoItem>

            <DemoItem
                title="With icon"
                code={
                    '<Badge color="primary" size={48} icon="star" />\n\n<Badge color="secondary" size={48} icon="star" />\n\n<Badge color="success" size={48} icon="star" />\n\n<Badge color="danger" size={48} icon="star" />\n\n<Badge color="warning" size={48} icon="star" />'
                }
            >
                <Grid col={8}>
                    <Badge color="primary" size={48} icon="star" />
                    <Badge color="secondary" size={48} icon="star" />
                    <Badge color="success" size={48} icon="star" />
                    <Badge color="danger" size={48} icon="star" />
                    <Badge color="warning" size={48} icon="star" />
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

export default BadgePage
