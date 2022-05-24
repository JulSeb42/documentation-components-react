// Imports
import React from "react"
import { Form, Input } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const FormPage = () => {
    const demo = [
        {
            code: '<Form btnPrimary="Send">\n    <Input id="input" label="Input" />\n    <Input\n        id="password"\n        label="Password"\n        password\n        iconPassword\n    />\n</Form>',
            demo: (
                <Form btnPrimary="Send">
                    <Input id="input" label="Input" />
                    <Input
                        id="password"
                        label="Password"
                        password
                        iconPassword
                    />
                </Form>
            ),
        },
    ]

    const props = [
        {
            name: "onSubmit",
            type: "Funtion",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "btnPrimary",
            type: "String",
            example: "Send",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "colorPrimary",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "colorHoverPrimary",
            type: "String",
            example: "#C3C3C3",
            possible: "-",
            default: "Variables.Colors.Primary300",
            required: "No",
        },
        {
            name: "colorActivePrimary",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "Variables.Colors.Primary600",
            required: "No",
        },
        {
            name: "iconLeftPrimary",
            type: "String",
            example: "send",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconRightPrimary",
            type: "String",
            example: "chevron-right",
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
            name: "btnCancel (url)",
            type: "String",
            example: "/",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "textBtnCancel",
            type: "String",
            example: "Quit",
            possible: "-",
            default: "Cancel",
            required: "No",
        },
        {
            name: "colorCancel",
            type: "String",
            example: "danger",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "colorHoverCancel",
            type: "String",
            example: "#C3C3C3",
            possible: "-",
            default: "Variables.Colors.Primary300",
            required: "No",
        },
        {
            name: "colorActiveCancel",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "Variables.Colors.Primary600",
            required: "No",
        },
        {
            name: "iconLeftCancel",
            type: "String",
            example: "close",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconRightCancel",
            type: "String",
            example: "close",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "onClickReset",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "btnReset",
            type: "String",
            example: "Reload form",
            possible: "-",
            default: "Reset",
            required: "No",
        },
        {
            name: "colorReset",
            type: "String",
            example: "warning",
            possible: possible.colors,
            default: "None",
            required: "No",
        },
        {
            name: "colorHoverReset",
            type: "String",
            example: "#C3C3C3",
            possible: "-",
            default: "Variables.Colors.Primary300",
            required: "No",
        },
        {
            name: "colorActiveReset",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "Variables.Colors.Primary600",
            required: "No",
        },
        {
            name: "iconLeftReset",
            type: "String",
            example: "reload",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconRightReset",
            type: "String",
            example: "reload",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Form" back="/components" component="Form">
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

export default FormPage
