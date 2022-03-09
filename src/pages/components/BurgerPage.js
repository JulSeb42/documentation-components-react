// Packages
import React, { useState } from "react"
import { Burger } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const BurgerPage = () => {
    const props = [
        {
            name: "onClick",
            type: "Function",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "open",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <PageDemo title="Burger" category="components" import="Burger">
            <DemoItem
                code={
                    "<Burger onClick={() => setIsOpen(!isOpen)} open={isOpen} />"
                }
            >
                <Burger onClick={() => setIsOpen(!isOpen)} open={isOpen} />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default BurgerPage
