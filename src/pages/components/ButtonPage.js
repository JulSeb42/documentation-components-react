// Imports
import React from "react"
import { Button, Flexbox } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const ButtonPage = () => {
    // Props
    const props = [
        {
            name: "btnStyle",
            type: "String",
            example: "text",
            possible: '"plain" | "text" | "outline"',
            default: "plain",
            required: "No",
        },
        {
            name: "type",
            type: "String",
            example: "submit",
            possible: '"button" | "submit" | "reset"',
            default: "None",
            required: "No",
        },
        {
            name: "color",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "to",
            type: "String",
            example: "/about",
            possible: "-",
            default: "None",
            required: "If you want to use the button as a link",
        },
        {
            name: "iconLeft",
            type: "String",
            example: "chevron-left",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconRight",
            type: "String",
            example: "chevron-down",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "loading",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "noPadding",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "colorHover",
            type: "String",
            example: "#C3C3C3",
            possible: "-",
            default: "Variables.Colors.Primary300",
            required: "No",
        },
        {
            name: "colorActive",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "Variables.Colors.Primary600",
            required: "",
        },
        {
            name: "justify",
            type: "String",
            example: "center",
            possible: '"start" | "center" | "end" | "stretch"',
            default: "start",
            required: "No",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Button" back="/components" component="Button">
            <DemoItem
                title="Plain"
                code={
                    '<Button btnStyle="plain" color="primary">\n    Button\n</Button>\n<Button btnStyle="plain" color="secondary">\n    Button\n</Button>\n<Button btnStyle="plain" color="success">\n    Button\n</Button>\n<Button btnStyle="plain" color="danger">\n    Button\n</Button>\n<Button btnStyle="plain" color="warning">\n    Button\n</Button>\n<Button btnStyle="plain" color="white">\n    Button\n</Button>\n<Button btnStyle="plain" color="primary" disabled>\n    Button\n</Button>'
                }
            >
                <Flexbox gap="s">
                    <Button btnStyle="plain" color="primary">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="secondary">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="success">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="danger">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="warning">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="white">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="primary" disabled>
                        Button
                    </Button>
                </Flexbox>
            </DemoItem>

            <DemoItem
                title="Text"
                code={
                    '<Button btnStyle="text" color="primary">\n    Button\n</Button>\n<Button btnStyle="text" color="secondary">\n    Button\n</Button>\n<Button btnStyle="text" color="success">\n    Button\n</Button>\n<Button btnStyle="text" color="danger">\n    Button\n</Button>\n<Button btnStyle="text" color="warning">\n    Button\n</Button>\n<Button btnStyle="text" color="white">\n    Button\n</Button>\n<Button btnStyle="text" color="primary" disabled>\n    Button\n</Button>'
                }
            >
                <Flexbox gap="s">
                    <Button btnStyle="text" color="primary">
                        Button
                    </Button>
                    <Button btnStyle="text" color="secondary">
                        Button
                    </Button>
                    <Button btnStyle="text" color="success">
                        Button
                    </Button>
                    <Button btnStyle="text" color="danger">
                        Button
                    </Button>
                    <Button btnStyle="text" color="warning">
                        Button
                    </Button>
                    <Button btnStyle="text" color="white">
                        Button
                    </Button>
                    <Button btnStyle="text" color="primary" disabled>
                        Button
                    </Button>
                </Flexbox>
            </DemoItem>

            <DemoItem
                title="Outline"
                code={
                    '<Button btnStyle="outline" color="primary">\n    Button\n</Button>\n<Button btnStyle="outline" color="secondary">\n    Button\n</Button>\n<Button btnStyle="outline" color="success">\n    Button\n</Button>\n<Button btnStyle="outline" color="danger">\n    Button\n</Button>\n<Button btnStyle="outline" color="warning">\n    Button\n</Button>\n<Button btnStyle="outline" color="white">\n    Button\n</Button>\n<Button btnStyle="outline" color="primary" disabled>\n    Button\n</Button>'
                }
            >
                <Flexbox gap="s">
                    <Button btnStyle="outline" color="primary">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="secondary">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="success">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="danger">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="warning">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="white">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="primary" disabled>
                        Button
                    </Button>
                </Flexbox>
            </DemoItem>

            <DemoItem
                title="Icon left"
                code={
                    '<Button btnStyle="plain" color="primary" iconLeft="send">\n    Button\n</Button>'
                }
            >
                <Button btnStyle="plain" color="primary" iconLeft="send">
                    Button
                </Button>
            </DemoItem>

            <DemoItem
                title="Icon right"
                code={
                    '<Button btnStyle="plain" color="primary" iconRight="chevron-down">\n    Button\n</Button>'
                }
            >
                <Button
                    btnStyle="plain"
                    color="primary"
                    iconRight="chevron-down"
                >
                    Button
                </Button>
            </DemoItem>

            <DemoItem
                title="Loading"
                code={
                    '<Button btnStyle="plain" color="primary" disabled loading={true}>\n    Button\n</Button>'
                }
            >
                <Button
                    btnStyle="plain"
                    color="primary"
                    disabled
                    loading={true}
                >
                    Button
                </Button>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default ButtonPage
