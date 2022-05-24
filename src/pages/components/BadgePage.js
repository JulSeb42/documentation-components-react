// Imports
import React from "react"
import { Badge, Flexbox } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const BadgePage = () => {
    // Props
    // icon?: string
    const props = [
        {
            name: "size",
            type: "Number",
            example: "32",
            possible: "-",
            default: "16",
            required: "No",
        },
        {
            name: "color",
            type: "String",
            example: "warning",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "textColor",
            type: "String",
            example: "gray",
            possible: possible.colors,
            default: "white",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "user",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "children",
            type: "String",
            example: "2",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Badge" back="/components" component="Badge">
            <DemoItem
                title="Empty"
                code={
                    '<Badge color="primary" />\n<Badge color="secondary" />\n<Badge color="success" />\n<Badge color="danger" />\n<Badge color="warning" />\n<Badge color="black" />\n<Badge color="white" />\n<Badge color="gray" />'
                }
            >
                <Flexbox gap="s">
                    <Badge color="primary" />
                    <Badge color="secondary" />
                    <Badge color="success" />
                    <Badge color="danger" />
                    <Badge color="warning" />
                    <Badge color="black" />
                    <Badge color="white" />
                    <Badge color="gray" />
                </Flexbox>
            </DemoItem>

            <DemoItem
                title="With a number"
                code={
                    '<Badge color="primary" size={32}>\n    1\n</Badge>\n<Badge color="secondary" size={32}>\n    1\n</Badge>\n<Badge color="success" size={32}>\n    1\n</Badge>\n<Badge color="danger" size={32}>\n    1\n</Badge>\n<Badge color="warning" size={32}>\n    1\n</Badge>\n<Badge color="black" size={32}>\n    1\n</Badge>\n<Badge color="white" size={32}>\n    1\n</Badge>\n<Badge color="gray" size={32}>\n    1\n</Badge>'
                }
            >
                <Flexbox gap="s">
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
                    <Badge color="black" size={32}>
                        1
                    </Badge>
                    <Badge color="white" size={32}>
                        1
                    </Badge>
                    <Badge color="gray" size={32}>
                        1
                    </Badge>
                </Flexbox>
            </DemoItem>

            <DemoItem
                title="With an icon"
                code={
                    '<Badge color="primary" size={48} icon="star" />\n<Badge color="secondary" size={48} icon="star" />\n<Badge color="success" size={48} icon="star" />\n<Badge color="danger" size={48} icon="star" />\n<Badge color="warning" size={48} icon="star" />\n<Badge color="black" size={48} icon="star" />\n<Badge color="white" size={48} icon="star" />\n<Badge color="gray" size={48} icon="star" />'
                }
            >
                <Flexbox gap="s">
                    <Badge color="primary" size={48} icon="star" />
                    <Badge color="secondary" size={48} icon="star" />
                    <Badge color="success" size={48} icon="star" />
                    <Badge color="danger" size={48} icon="star" />
                    <Badge color="warning" size={48} icon="star" />
                    <Badge color="black" size={48} icon="star" />
                    <Badge color="white" size={48} icon="star" />
                    <Badge color="gray" size={48} icon="star" />
                </Flexbox>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default BadgePage
