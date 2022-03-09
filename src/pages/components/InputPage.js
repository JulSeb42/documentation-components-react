// Packages
import React, { useState } from "react"
import { Input } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const InputPage = () => {
    const props = [
        {
            name: "id",
            type: "String",
            example: "input",
            default: "None",
            required: "Yes",
        },
        {
            name: "value",
            type: "String or Variable",
            example: "email",
            default: "None",
            required: "Yes",
        },
        {
            name: "onChange",
            type: "Function",
            example: "handlePassword",
            default: "None",
            required: "Yes",
        },
        {
            name: "type",
            type: "String",
            example: "email",
            default: "text",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "mail",
            default: "None",
            required: "No",
        },
        {
            name: "validation",
            type: "String",
            example: "validationPassword",
            default: "None",
            required: "No",
        },
        {
            name: "validationText",
            type: "String",
            example: "Your email is valid",
            default: "None",
            required: "No",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "password",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "iconPassword",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "label",
            type: "String",
            example: "Email",
            default: "None",
            required: "No",
        },
        {
            name: "helper",
            type: "String",
            example: "Your password must be at least 6 characters long",
            default: "None",
            required: "No",
        },
        {
            name: "helperBottom",
            type: "String",
            example: "Your password must be at least 6 characters long",
            default: "None",
            required: "No",
        },
        {
            name: "counter",
            type: "Number",
            example: "140",
            default: "None",
            required: "No",
        },
    ]

    // Validation
    const [validation, setValidation] = useState("not-passed")
    const [inputValidate, setInputValidate] = useState("e")

    const handleValidation = e => {
        setInputValidate(e.target.value)

        if (e.target.value.length > 6) {
            setValidation("passed")
        } else {
            setValidation("not-passed")
        }
    }

    // Counter
    const [text, setText] = useState("")
    const handleText = e => setText(e.target.value)

    // Markdown
    const [markdown, setMarkdown] = useState("")

    return (
        <PageDemo title="Input" category="components" import="Input">
            <DemoItem title="Input text" code={'<Input id="input" />'}>
                <Input id="input" />
            </DemoItem>

            <DemoItem
                title="Input password"
                code={'<Input id="input-password" password />'}
            >
                <Input id="input-password" password />
            </DemoItem>

            <DemoItem
                title="Input with label & helper"
                code={
                    '<Input label="Label" helper="Helper" id="input-label" />'
                }
            >
                <Input label="Label" helper="Helper" id="input-label" />
            </DemoItem>

            <DemoItem
                title="Input with helper at the bottom"
                code={
                    '<Input helperBottom="Helper" id="input-helper-bottom" />'
                }
            >
                <Input helperBottom="Helper" id="input-helper-bottom" />
            </DemoItem>

            <DemoItem
                title="Input with icon"
                code={'<Input icon="mail" id="input-icon" />'}
            >
                <Input icon="mail" id="input-icon" />
            </DemoItem>

            <DemoItem
                title="Input disabled"
                code={'<Input id="input-disabled" disabled value="disabled" />'}
            >
                <Input id="input-disabled" disabled value="disabled" />
            </DemoItem>

            <DemoItem
                title="Input with validation"
                code={
                    '// Validation\nconst [validation, setValidation] = useState("not-passed")\nconst [inputValidate, setInputValidate] = useState("e")\n\nconst handleValidation = e => {\n    setInputValidate(e.target.value)\n\n    if (e.target.value.length > 6) {\n        setValidation("passed")\n    } else {\n        setValidation("not-passed")\n    }\n}\n\n<Input\n    label="Input with validation"\n    id="input-validation"\n    validationText="Text validation"\n    onChange={handleValidation}\n    validation={validation}\n    value={inputValidate}\n/>'
                }
            >
                <Input
                    label="Input with validation"
                    id="input-validation"
                    validationText="Text validation"
                    onChange={handleValidation}
                    validation={validation}
                    value={inputValidate}
                />
            </DemoItem>

            <DemoItem
                title="Textarea and counter"
                code={
                    '// Counter\nconst [text, setText] = useState("")\nconst handleText = e => setText(e.target.value)\n\n<Input\n    type="textarea"\n    label="Textarea"\n    id="textarea"\n    value={text}\n    onChange={handleText}\n    counter={140}\n/>'
                }
            >
                <Input
                    type="textarea"
                    label="Textarea"
                    id="textarea"
                    value={text}
                    onChange={handleText}
                    counter={140}
                />
            </DemoItem>

            <DemoItem
                title="Select"
                code={
                    '<Input type="select" label="Select" id="select">\n    <option>1</option>\n</Input>'
                }
            >
                <Input type="select" label="Select" id="select">
                    <option>1</option>
                </Input>
            </DemoItem>

            <DemoItem
                title="Markdown"
                helper="Here we're using this package: https://github.com/uiwjs/react-md-editor"
                code={
                    '// Markdown\nconst [markdown, setMarkdown] = useState("")\n\n<Input\n    type="markdown"\n    label="Markdown"\n    id="markdown"\n    onChange={setMarkdown}\n    value={markdown}\n/>'
                }
            >
                <Input
                    type="markdown"
                    label="Markdown"
                    id="markdown"
                    onChange={setMarkdown}
                    value={markdown}
                />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default InputPage
