// Packages
import React from "react"
import { Form, Input } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const FormPage = () => {
    const props = [
        {
            name: "onSubmit",
            type: "Function",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "btnPrimary (text for submit button)",
            type: "String",
            example: "Save",
            default: "None",
            required: "No",
        },
        {
            name: "iconLeftPrimary",
            type: "String",
            example: "send",
            default: "None",
            required: "No",
        },
        {
            name: "iconRightPrimary",
            type: "String",
            example: "chevron-right",
            default: "None",
            required: "No",
        },
        {
            name: "btnCancel (url going to previous page)",
            type: "String",
            example: "/my-account",
            default: "None",
            required: "No",
        },
        {
            name: "textBtnCancel",
            type: "String",
            example: "Back",
            default: "Cancel",
            required: "No",
        },
        {
            name: "iconLeftCancel",
            type: "String",
            example: "close",
            default: "None",
            required: "None",
        },
        {
            name: "iconRightCancel",
            type: "String",
            example: "close",
            default: "None",
            required: "None",
        },
        {
            name: "btnReset",
            type: "Boolean",
            example: "-",
            default: "false",
            required: 'No, and do not put it if the text will only be "Reset"',
        },
        {
            name: "textBtnReset",
            type: "String",
            example: "Reset form",
            default: "Reset",
            required: "No",
        },
        {
            name: "onClickReset",
            type: "Function",
            example: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconLeftReset",
            type: "String",
            example: "reload",
            default: "None",
            required: "No",
        },
        {
            name: "iconRightReset",
            type: "String",
            example: "reload",
            default: "None",
            required: "No",
        },
        {
            name: "loading",
            type: "Boolean",
            example: "-",
            default: "false",
            required:
                "No, use it when you need the form to load before submitting",
        },
    ]

    return (
        <PageDemo title="Form" category="components" import="Form">
            <DemoItem
                code={
                    '<Form btnPrimary="Send" btnCancel="/">\n    <Input label="Name" />\n\n    <Input label="Password" password />\n</Form>'
                }
            >
                <Form btnPrimary="Send" btnCancel="/">
                    <Input label="Name" />

                    <Input label="Password" password />
                </Form>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default FormPage
