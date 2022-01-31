// Packages
import React, { useState } from "react"
import { Modal, Button, Image } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        Open modal
                    </Button>

                    <Modal
                        className={isOpen ? "open" : ""}
                        close={() => setIsOpen(!isOpen)}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                            alt="Image modal"
                        />
                    </Modal>
                </DemoContent>

                <DemoCode>
                    {
                        'const [isOpen, setIsOpen] = useState(false)\n\n<Button onClick={() => setIsOpen(!isOpen)}>\n    Open modal\n</Button>\n\n<Modal\n    className={isOpen ? "open" : ""}\n    close={() => setIsOpen(!isOpen)}\n>\n    <Image src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image modal" />\n</Modal>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>children</td>
                    <td>Any</td>
                    <td>&lt;Image src="image" /&gt;</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>close</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
            </TableProps>
        </>
    )
}

export default ModalDemo
