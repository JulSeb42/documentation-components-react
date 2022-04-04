// Packages
import React, { useState } from "react"
import {
    Select,
    SelectItem,
} from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const SelectPage = () => {
    const props = [
        {
            name: "selected (Select)",
            type: "String",
            example: "react",
            default: "None",
            required: "Yes",
        },
        {
            name: "isOpen (Select)",
            type: "Boolean",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClickSelect (Select)",
            type: "Function",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClick (SelectItem)",
            type: "Function",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "selected (SelectItem)",
            type: "Boolean",
            example: "-",
            default: "None",
            required: "Yes",
        },
    ]

    // Items
    const items = ["react", "javascript", "scss", "css", "html"]

    // Handle
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(items[0])

    const handleSelect = value => () => {
        setSelected(value)
        setIsOpen(false)
    }

    return (
        <PageDemo
            title="Select"
            category="components"
            import="Select, SelectItem"
        >
            <DemoItem
                code={
                    '// Items\nconst items = ["react", "javascript", "scss", "css", "html"]\n\n// Handle\nconst [isOpen, setIsOpen] = useState(false)\nconst [selected, setSelected] = useState(items[0])\n\nconst handleSelect = (value) => () => {\n    setSelected(value)\n    setIsOpen(false)\n}\n\n<Select\n    selected={selected}\n    isOpen={isOpen}\n    onClickSelect={() => setIsOpen(!isOpen)}\n>\n    {items.map((item, i) => (\n        <SelectItem\n            onClick={handleSelect(item)}\n            key={i}\n            selected={selected === item && true}\n        >\n            {item}\n        </SelectItem>\n    ))}\n</Select>'
                }
            >
                <Select
                    selected={selected}
                    isOpen={isOpen}
                    onClickSelect={() => setIsOpen(!isOpen)}
                >
                    {items.map((item, i) => (
                        <SelectItem
                            onClick={handleSelect(item)}
                            key={i}
                            selected={selected === item && true}
                        >
                            {item}
                        </SelectItem>
                    ))}
                </Select>
            </DemoItem>
            
            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default SelectPage
