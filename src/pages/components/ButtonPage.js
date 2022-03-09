// Packages
import React from "react"
import { Grid, Button } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ButtonPage = () => {
    const props = [
        {
            name: "btnStyle",
            type: "String",
            example: "plain, text or outline",
            default: "plain",
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
            name: "justify",
            type: "String",
            example: "start, center, end",
            default: "None",
            required: "No, but use it when the button is inside a grid",
        },
        {
            name: "iconLeft",
            type: "String",
            example: "send",
            default: "None",
            required: "No, only if you want to use an icon on the left",
        },
        {
            name: "iconRight",
            type: "String",
            example: "chevron-right",
            default: "None",
            required: "No, only if you want to use an icon on the right",
        },
        {
            name: "to",
            type: "String",
            example: "/components",
            default: "None",
            required: "No, only if you want to use this button as a Link",
        },
        {
            name: "noPadding",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No, if you want to have paddings at 0",
        },
        {
            name: "loading",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No, only if your page needs to load before enabling a button",
        },
        {
            name: "children",
            type: "String",
            example: "Button",
            default: "None",
            required: "Yes",
        },
    ]

    return (
        <PageDemo title="Button" category="components" import="Button">
            <DemoItem
                title="Plain"
                code={
                    '<Button btnStyle="plain" color="primary">\n    Button\n</Button>\n\n<Button btnStyle="plain" color="secondary">\n    Button\n</Button>\n\n<Button btnStyle="plain" color="success">\n    Button\n</Button>\n\n<Button btnStyle="plain" color="danger">\n    Button\n</Button>\n\n<Button btnStyle="plain" color="warning">\n    Button\n</Button>\n\n<Button btnStyle="plain" color="white">\n    Button\n</Button>\n\n<Button btnStyle="plain" color="primary" disabled>\n    Button\n</Button>\n'
                }
            >
                <Grid col={8}>
                    <Button btnStyle="plain" color="primary" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="secondary" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="success" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="danger" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="warning" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="plain" color="white" justify="start">
                        Button
                    </Button>
                    <Button
                        btnStyle="plain"
                        color="primary"
                        justify="start"
                        disabled
                    >
                        Button
                    </Button>
                </Grid>
            </DemoItem>

            <DemoItem
                title="Text"
                code={
                    '<Button btnStyle="text" color="primary">\n    Button\n</Button>\n\n<Button btnStyle="text" color="secondary">\n    Button\n</Button>\n\n<Button btnStyle="text" color="success">\n    Button\n</Button>\n\n<Button btnStyle="text" color="danger">\n    Button\n</Button>\n\n<Button btnStyle="text" color="warning">\n    Button\n</Button>\n\n<Button btnStyle="text" color="white">\n    Button\n</Button>\n\n<Button btnStyle="text" color="primary" disabled>\n    Button\n</Button>'
                }
            >
                <Grid col={8}>
                    <Button btnStyle="text" color="primary" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="text" color="secondary" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="text" color="success" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="text" color="danger" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="text" color="warning" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="text" color="white" justify="start">
                        Button
                    </Button>
                    <Button
                        btnStyle="text"
                        color="primary"
                        justify="start"
                        disabled
                    >
                        Button
                    </Button>
                </Grid>
            </DemoItem>

            <DemoItem
                title="outline"
                code={
                    '<Button btnStyle="outline" color="primary">\n    Button\n</Button>\n\n<Button btnStyle="outline" color="secondary">\n    Button\n</Button>\n\n<Button btnStyle="outline" color="success">\n    Button\n</Button>\n\n<Button btnStyle="outline" color="danger">\n    Button\n</Button>\n\n<Button btnStyle="outline" color="warning">\n    Button\n</Button>\n\n<Button btnStyle="outline" color="white">\n    Button\n</Button>\n\n<Button btnStyle="outline" color="primary" disabled>\n    Button\n</Button>'
                }
            >
                <Grid col={8}>
                    <Button btnStyle="outline" color="primary" justify="start">
                        Button
                    </Button>
                    <Button
                        btnStyle="outline"
                        color="secondary"
                        justify="start"
                    >
                        Button
                    </Button>
                    <Button btnStyle="outline" color="success" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="danger" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="warning" justify="start">
                        Button
                    </Button>
                    <Button btnStyle="outline" color="white" justify="start">
                        Button
                    </Button>
                    <Button
                        btnStyle="outline"
                        color="primary"
                        justify="start"
                        disabled
                    >
                        Button
                    </Button>
                </Grid>
            </DemoItem>

            <DemoItem
                title="Icon left"
                code={
                    '<Button btnStyle="plain" color="primary" iconLeft="send">\n    Button\n</Button>\n'
                }
            >
                <Button
                    btnStyle="plain"
                    color="primary"
                    justify="start"
                    iconLeft="send"
                >
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
                    justify="start"
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
                    justify="start"
                    disabled
                    loading={true}
                >
                    Button
                </Button>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ButtonPage
