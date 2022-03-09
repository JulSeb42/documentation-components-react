// Packages
import React from "react"
import { Avatar } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const AvatarPage = () => {
    const props = [
        {
            name: "size",
            type: "Number",
            example: "24",
            default: "48",
            required: "No",
        },
        {
            name: "background",
            type: "String value or Variable",
            example: "Variables.Colors.Secondary500",
            default: "Variables.Colors.Primary500",
            required: "No",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "Variables.Colors.Black",
            default: "Variables.Colors.White",
            required: "No",
        },
        {
            name: "src",
            type: "String",
            example: "https://image.com",
            default: "None",
            required: "Yes if you want to use an image",
        },
        {
            name: "alt",
            type: "String",
            example: "Avatar picture",
            default: "None",
            required: "Yes if you want to use an image",
        },
        {
            name: "icon",
            type: "String",
            example: "user",
            default: "None",
            required: "Yes if you want to use an icon",
        },
        {
            name: "children",
            type: "String",
            example: "B",
            default: "None",
            required: "Yes if you want to use a letter",
        },
    ]

    return (
        <PageDemo title="Avatar" category="components" import="Avatar">
            <DemoItem
                title="With picture"
                code={
                    '<Avatar\n    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"\n    alt="Avatar"\n/>'
                }
            >
                <Avatar
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="Avatar"
                />
            </DemoItem>

            <DemoItem title="With letter" code={"<Avatar>A</Avatar>"}>
                <Avatar>A</Avatar>
            </DemoItem>

            <DemoItem title="With icon" code={'<Avatar icon="user" />'}>
                <Avatar icon="user" />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default AvatarPage
