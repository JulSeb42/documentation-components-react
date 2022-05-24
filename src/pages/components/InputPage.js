// Imports
import React, { useState } from "react"
import { Input } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const InputPage = () => {
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

    // Password & validation
    const [validationPassword, setValidationPassword] = useState("not-passed")
    const [password, setPassword] = useState("e")

    const handlePassword = e => {
        setPassword(e.target.value)

        if (e.target.value.length > 6) {
            setValidationPassword("passed")
        } else {
            setValidationPassword("not-passed")
        }
    }

    // Counter
    const [text, setText] = useState("")
    const handleText = e => setText(e.target.value)

    // Markdown
    const [markdown, setMarkdown] = useState("")

    const demo = [
        {
            title: "Text input",
            code: '<Input id="input" />',
            demo: <Input id="input" />,
        },
        {
            title: "Password input",
            code: '<Input id="input-password" password />',
            demo: <Input id="input-password" password iconPassword />,
        },
        {
            title: "Input with label and helper",
            code: '<Input label="Label" helper="Helper" id="input-label" />',
            demo: <Input label="Label" helper="Helper" id="input-label" />,
        },
        {
            title: "Input with label and helper bottom",
            code: '<Input label="Label" helperBottom="Helper" id="input-label-helper" />',
            demo: (
                <Input
                    label="Label"
                    helperBottom="Helper"
                    id="input-label-helper"
                />
            ),
        },
        {
            title: "Input with icon",
            code: '<Input icon="mail" id="input-icon" />',
            demo: <Input icon="mail" id="input-icon" />,
        },
        {
            title: "Input disabled",
            code: '<Input id="input-disabled" disabled value="disabled" />',
            demo: <Input id="input-disabled" disabled value="disabled" />,
        },
        {
            title: "Input with validation",
            code: 'const [validation, setValidation] = useState("not-passed")\nconst [inputValidate, setInputValidate] = useState("e")\n\nconst handleValidation = e => {\n    setInputValidate(e.target.value)\n\n    if (e.target.value.length > 6) {\n        setValidation("passed")\n    } else {\n        setValidation("not-passed")\n    }\n}\n\n<Input\n    label="Input with validation"\n    id="input-validation"\n    validationText="Text validation"\n    onChange={handleValidation}\n    validation={validation}\n    value={inputValidate}\n/>',
            demo: (
                <Input
                    label="Input with validation"
                    id="input-validation"
                    validationText="Text validation"
                    onChange={handleValidation}
                    validation={validation}
                    value={inputValidate}
                />
            ),
        },
        {
            title: "Input with password validation",
            code: 'const [validationPassword, setValidationPassword] = useState("not-passed")\nconst [password, setPassword] = useState("e")\n\nconst handlePassword = e => {\n    setPassword(e.target.value)\n\n    if (e.target.value.length > 6) {\n        setValidationPassword("passed")\n    } else {\n        setValidationPassword("not-passed")\n    }\n}\n\n<Input\n    id="input-validation-password"\n    validationText="Text validation"\n    onChange={handlePassword}\n    validation={validationPassword}\n    value={password}\n    password\n/>',
            demo: (
                <Input
                    id="input-validation-password"
                    validationText="Text validation"
                    onChange={handlePassword}
                    validation={validationPassword}
                    value={password}
                    password
                />
            ),
        },
        {
            title: "Textarea",
            code: 'const [text, setText] = useState("")\nconst handleText = e => setText(e.target.value)\n\n<Input\n    type="textarea"\n    label="Textarea"\n    id="textarea"\n    value={text}\n    onChange={handleText}\n    counter\n    maxLength={140}\n/>',
            demo: (
                <Input
                    type="textarea"
                    label="Textarea"
                    id="textarea"
                    value={text}
                    onChange={handleText}
                    counter
                    maxLength={140}
                />
            ),
        },
        {
            title: "Select",
            code: '<Input type="select" label="Select" id="select">\n    <option>1</option>\n</Input>',
            demo: (
                <Input type="select" label="Select" id="select">
                    <option>1</option>
                </Input>
            ),
        },
        {
            title: "Markdown input",
            helper: "Here we're using this package: https://github.com/uiwjs/react-md-editor",
            code: 'const [markdown, setMarkdown] = useState("")\n\n<Input\n    label="Markdown editor"\n    type="markdown"\n    id="markdown"\n    onChange={setMarkdown}\n    value={markdown}\n/>',
            demo: (
                <Input
                    label="Markdown editor"
                    type="markdown"
                    id="markdown"
                    onChange={setMarkdown}
                    value={markdown}
                    colorMode="light"
                />
            ),
        },
    ]

    const props = [
        {
            name: "id",
            type: "String",
            example: "email",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onChange",
            type: "Function",
            example: "handlePassword",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "value",
            type: "Any",
            example: "fullName",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "type",
            type: "String",
            example: "number",
            possible:
                '"textarea" | "select" | "markdown" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "number" | "search" | "tel" | "text" | "time" | "url" | "week"',
            default: "text",
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
        {
            name: "password",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
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
            name: "label",
            type: "String",
            example: "Full name",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helper",
            type: "String",
            example: "Your password must be at least 6 characters long",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helperBottom",
            type: "String",
            example: "Your password must be at least 6 characters long",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "validation",
            type: "String",
            example: "passed",
            possible: '"not-passed" | "passed"',
            default: "None",
            required: "No",
        },
        {
            name: "validationText",
            type: "String",
            example: "Your email is valid",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "maxLength",
            type: "Number",
            example: "42",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "counter",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: 'preview (for type="markdown")',
            type: "String",
            example: "live",
            possible: '"live" | "edit" | "preview"',
            default: "edit",
            required: "No",
        },
        {
            name: 'colorMode  (for type="markdown")',
            type: "String",
            example: "dark",
            possible: '"dark" | "light"',
            default: "light",
            required: "No",
        },
        {
            name: "customIconPassed",
            type: "String",
            example: "check",
            possible: "-",
            default: "check-circle",
            required: "No",
        },
        {
            name: "customIconNotPassed",
            type: "String",
            example: "close",
            possible: "-",
            default: "close-circle",
            required: "No",
        },
        {
            name: "iconPassword",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "textShowPassword",
            type: "String",
            example: "-",
            possible: "-",
            default: "Show",
            required: "No",
        },
        {
            name: "textHidePassword",
            type: "String",
            example: "-",
            possible: "-",
            default: "Hide",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Input" back="/components" component="Input">
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

export default InputPage
