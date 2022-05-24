// Imports
import React from "react"
import { Avatar } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const AvatarPage = () => {
    const demo = [
        {
            title: "With a letter",
            code: "<Avatar>A</Avatar>",
            demo: <Avatar>A</Avatar>,
        },
        {
            title: "With a picture",
            code: '<Avatar\n    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"\n    alt="Avatar"\n    size={80}\n/>',
            demo: (
                <Avatar
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="Avatar"
                    size={80}
                />
            ),
        },
        {
            title: "With an icon",
            code: '<Avatar icon="user" background="secondary" />',
            demo: <Avatar icon="user" background="secondary" />,
        },
    ]

    const props = [
        {
            name: "children",
            type: "String",
            example: "B",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "src",
            type: "String",
            example: "/avatar.jpg",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "alt",
            type: "String",
            example: "Avatar Julien",
            possible: "-",
            default: "None",
            required: "Yes, if it's a picture avatar",
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
            name: "size",
            type: "Number",
            example: "32",
            possible: "-",
            default: "48",
            required: "No",
        },
        {
            name: "background",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "color",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "white",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Avatar" back="/components" component="Avatar">
            {demo.map(demo => (
                <DemoItem title={demo.title} code={demo.code} key={uuid()}>
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

export default AvatarPage
