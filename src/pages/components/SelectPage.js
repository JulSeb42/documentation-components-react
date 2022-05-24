// Imports
import React, { useState } from "react"
import { Select, SelectItem } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const SelectPage = () => {
    // Items
    const items = ["react", "javascript", "scss", "css", "html"]

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(items[0])

    const handleSelect = value => () => {
        setSelected(value)
        setIsOpen(false)
    }

    const demo = [
        {
            code: 'const items = ["react", "javascript", "scss", "css", "html"]\n\nconst [isOpen, setIsOpen] = useState(false)\nconst [selected, setSelected] = useState(items[0])\n\nconst handleSelect = value => () => {\n    setSelected(value)\n    setIsOpen(false)\n}\n\n<Select\n    selected={selected}\n    isOpen={isOpen}\n    onClickSelect={() => setIsOpen(!isOpen)}\n    id="select"\n    label="Select a language"\n>\n    {items.map(item => (\n        <SelectItem\n            onClick={handleSelect(item)}\n            key={uuid()}\n            selected={selected === item && true}\n        >\n            {item}\n        </SelectItem>\n    ))}\n</Select>',
            demo: (
                <Select
                    selected={selected}
                    isOpen={isOpen}
                    onClickSelect={() => setIsOpen(!isOpen)}
                    id="select"
                    label="Select a language"
                >
                    {items.map((item, i) => (
                        <SelectItem
                            onClick={handleSelect(item)}
                            key={uuid()}
                            selected={selected === item && true}
                        >
                            {item}
                        </SelectItem>
                    ))}
                </Select>
            ),
        },
    ]

    const props = [
        {
            name: "id (Select)",
            type: "String",
            example: "language",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "isOpen (Select)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "onClickSelect (Select)",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClick (SelectItem)",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "value (Select)",
            type: "Any",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "selected (Select & SelectItem)",
            type: "Any",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "disabled (Select)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "label (Select)",
            type: "String",
            example: "Language",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helper (Select)",
            type: "String",
            example: "Please select your favourite language",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helperBottom (Select)",
            type: "String",
            example: "Please select your favourite language",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Select"
            back="/components"
            component="Select, SelectItem"
        >
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

export default SelectPage
