// Packages
import React, { useState } from "react"
import { DropdownContainer, Dropdown, Button, LinkScroll as Link } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"

function DropdownDemo() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <DropdownContainer>
                        <Button
                            btnstyle="plain"
                            color="primary"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Open dropdown
                        </Button>

                        <Dropdown className={isOpen ? "open" : ""}>
                            <Link to="#">Link</Link>
                            <Link to="#">Link</Link>
                            <Link to="#">Link</Link>
                        </Dropdown>
                    </DropdownContainer>
                </DemoContent>

                <DemoCode>
                    {
                        'const [isOpen, setIsOpen] = useState(false)\n\n<DropdownContainer>\n    <Button\n        btnstyle="plain"\n        color="primary"\n        onClick={() => setIsOpen(!isOpen)}\n    >\n        Open dropdown\n    </Button>\n\n    <Dropdown className={isOpen ? "open" : ""}>\n        <Link to="#">Link</Link>\n        <Link to="#">Link</Link>\n        <Link to="#">Link</Link>\n    </Dropdown>\n</DropdownContainer>'
                    }
                </DemoCode>
            </DemoContainer>
        </>
    )
}

export default DropdownDemo
