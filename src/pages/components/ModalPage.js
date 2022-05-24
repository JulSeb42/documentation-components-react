// Imports
import React, { useState } from "react"
import { Modal, Button, Image } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ModalPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const demo = [
        {
            code: 'const [isOpen, setIsOpen] = useState(false)\n\n<Button onClick={() => setIsOpen(!isOpen)} justify="start">\n    Open modal\n</Button>\n\n<Modal isOpen={isOpen} close={() => setIsOpen(!isOpen)}>\n    <Image\n        src="https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"\n        alt="Img"\n        width="90vw"\n        height="90vh"\n        fit="contain"\n    />\n</Modal>',
            demo: (
                <>
                    <Button onClick={() => setIsOpen(!isOpen)} justify="start">
                        Open modal
                    </Button>

                    <Modal isOpen={isOpen} close={() => setIsOpen(!isOpen)}>
                        <Image
                            src="https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                            alt="Img"
                            width="90vw"
                            height="90vh"
                            fit="contain"
                        />
                    </Modal>
                </>
            ),
        },
    ]

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
            name: "children",
            type: "React component",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "close",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "close-circle",
            possible: "-",
            default: "x",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Modal" back="/components" component="Modal">
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

export default ModalPage
