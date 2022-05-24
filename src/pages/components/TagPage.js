// Imports
import React from "react"
import { Tag, Flexbox } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const TagPage = () => {
    // Props
    const props = [
        {
            name: "color",
            type: "String",
            example: "secondary",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "textColor",
            type: "String",
            example: "black",
            possible: possible.colors,
            default: "white",
            required: "No",
        },
        {
            name: "pill",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "justify",
            type: "String",
            example: "center",
            possible: '"start" | "center" | "end" | "stretch"',
            default: "start",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Tag" back="/components" component="Tag">
            <DemoItem
                title="Rounded"
                code={
                    '<Tag color="primary">Tag</Tag>\n<Tag color="secondary">Tag</Tag>\n<Tag color="success">Tag</Tag>\n<Tag color="danger">Tag</Tag>\n<Tag color="warning">Tag</Tag>\n<Tag color="black">Tag</Tag>\n<Tag color="white">Tag</Tag>\n<Tag color="gray">Tag</Tag>'
                }
            >
                <Flexbox gap="s">
                    <Tag color="primary">Tag</Tag>
                    <Tag color="secondary">Tag</Tag>
                    <Tag color="success">Tag</Tag>
                    <Tag color="danger">Tag</Tag>
                    <Tag color="warning">Tag</Tag>
                    <Tag color="black">Tag</Tag>
                    <Tag color="white">Tag</Tag>
                    <Tag color="gray">Tag</Tag>
                </Flexbox>
            </DemoItem>

            <DemoItem
                title="Pill"
                code={
                    '<Tag color="primary" pill>\n    Tag\n</Tag>\n<Tag color="secondary" pill>\n    Tag\n</Tag>\n<Tag color="success" pill>\n    Tag\n</Tag>\n<Tag color="danger" pill>\n    Tag\n</Tag>\n<Tag color="warning" pill>\n    Tag\n</Tag>\n<Tag color="black" pill>\n    Tag\n</Tag>\n<Tag color="white" pill>\n    Tag\n</Tag>\n<Tag color="gray" pill>\n    Tag\n</Tag>'
                }
            >
                <Flexbox gap="s">
                    <Tag color="primary" pill>
                        Tag
                    </Tag>
                    <Tag color="secondary" pill>
                        Tag
                    </Tag>
                    <Tag color="success" pill>
                        Tag
                    </Tag>
                    <Tag color="danger" pill>
                        Tag
                    </Tag>
                    <Tag color="warning" pill>
                        Tag
                    </Tag>
                    <Tag color="black" pill>
                        Tag
                    </Tag>
                    <Tag color="white" pill>
                        Tag
                    </Tag>
                    <Tag color="gray" pill>
                        Tag
                    </Tag>
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

export default TagPage
