// Imports
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { DropdownContainer, Dropdown, Button } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const DropdownPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isRightOpen, setIsRightOpen] = useState(false)

    const props = [
        {
            name: "justifyContent (DropdownContainer)",
            type: "String",
            example: "flex-end",
            possible:
                '"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right"',
            default: "flex-start",
            required: "No",
        },
        {
            name: "isOpen (Dropdown)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "position (Dropdown)",
            type: "String",
            example: "right",
            possible: '"left" | "right"',
            default: "left",
            required: "No",
        },
        {
            name: "background",
            type: "String",
            example: "secondary",
            possible: possible.colors,
            default: "white",
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
            name: "shadow",
            type: "String",
            example: "xl",
            possible: possible.shadows,
            default: "s",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Dropdown"
            back="/components"
            component="DropdownContainer, Dropdown"
        >
            <DemoItem
                title="On the left"
                code={
                    'const [isOpen, setIsOpen] = useState(false)\n\n<DropdownContainer>\n    <Button onClick={() => setIsOpen(!isOpen)}>Open dropdown</Button>\n\n    <Dropdown isOpen={isOpen}>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n    </Dropdown>\n</DropdownContainer>'
                }
            >
                <DropdownContainer>
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        Open dropdown
                    </Button>

                    <Dropdown isOpen={isOpen}>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                    </Dropdown>
                </DropdownContainer>
            </DemoItem>

            <DemoItem
                title="On the right"
                code={
                    'const [isRightOpen, setIsRightOpen] = useState(false)\n\n<DropdownContainer justifyContent="flex-end">\n    <Button onClick={() => setIsRightOpen(!isRightOpen)}>\n        Open dropdown\n    </Button>\n\n    <Dropdown isOpen={isRightOpen} position="right">\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n        <Link to="#">Item</Link>\n    </Dropdown>\n</DropdownContainer>'
                }
            >
                <DropdownContainer justifyContent="flex-end">
                    <Button onClick={() => setIsRightOpen(!isRightOpen)}>
                        Open dropdown
                    </Button>

                    <Dropdown isOpen={isRightOpen} position="right">
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                        <Link to="#">Item</Link>
                    </Dropdown>
                </DropdownContainer>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default DropdownPage
