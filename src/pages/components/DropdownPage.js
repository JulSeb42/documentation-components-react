// Packages
import React, { useState } from "react"
import { DropdownContainer, Dropdown, Button } from "components-react-julseb"
import { Link } from "react-router-dom"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const DropdownPage = () => {
    const props = [
        {
            name: "open (Dropdown)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <PageDemo
            title="Dropdown"
            category="components"
            import="DropdownContainer, Dropdown"
        >
            <DemoItem
                code={
                    'const [isOpen, setIsOpen] = useState(false)\n\n<DropdownContainer>\n    <Button onClick={()=> setIsOpen(!isOpen)}>\n        Open dropdown\n    </Button>\n\n    <Dropdown open={isOpen}>\n        <Link to="#">Link</Link>\n        <Link to="#">Link</Link>\n        <Link to="#">Link</Link>\n    </Dropdown>\n</DropdownContainer>'
                }
            >
                <DropdownContainer>
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        Open dropdown
                    </Button>

                    <Dropdown open={isOpen}>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                    </Dropdown>
                </DropdownContainer>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default DropdownPage
