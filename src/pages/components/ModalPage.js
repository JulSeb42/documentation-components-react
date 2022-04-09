// Packages
import React, { useState, useEffect } from "react"
import { Modal, Button, Image } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ModalPage = () => {
    // open, close, children
    const props = [
        {
            name: "open",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "children",
            type: "Any",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "close",
            type: "Function",
            example: "() => setIsOpen(false)",
            default: "None",
            required: "No",
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling")
            : document.body.classList.remove("stop-scrolling")
    }, [isOpen])

    return (
        <PageDemo title="Modal" category="components" import="Modal">
            <DemoItem 
                code={
                    'const [isOpen, setIsOpen] = useState(false)\n\nuseEffect(() => {\n    isOpen\n        ? document.body.classList.add("stop-scrolling")\n        : document.body.classList.remove("stop-scrolling")\n}, [isOpen])\n\n<Button onClick={()=> setIsOpen(!isOpen)}>\n    Open modal\n</Button>\n\n<Modal open={isOpen} close={()=> setIsOpen(!isOpen)}>\n    <Image\n        src="https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />\n</Modal>'
                }
            >
                <Button onClick={() => setIsOpen(!isOpen)} justify="start">
                    Open modal
                </Button>

                <Modal open={isOpen} close={() => setIsOpen(!isOpen)}>
                    <Image
                        src="https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Modal image"
                    />
                </Modal>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ModalPage
