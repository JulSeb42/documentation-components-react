// Imports
import React, { useState } from "react"
import { Burger } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const BurgerPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const props = [
        {
            name: "isOpen",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "onClick",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "width",
            type: "Number",
            example: 30,
            possible: "-",
            default: 32,
            required: "No",
        },
        {
            name: "height",
            type: "Number",
            example: 20,
            possible: "-",
            default: 24,
            required: "No",
        },
        {
            name: "border",
            type: "Number",
            example: 4,
            possible: "-",
            default: 2,
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
            name: "ariaLabel",
            type: "String",
            example: "Menu button",
            possible: "-",
            // eslint-disable-next-line
            default: '${isOpen ? "Close" : "Open"} menu',
            required: "No",
        },
    ]

    return (
        <PageComponent title="Burger" back="/components" component="Burger">
            <DemoItem
                code={
                    "const [isOpen, setIsOpen] = useState(false)\n\n<Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />"
                }
            >
                <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default BurgerPage
