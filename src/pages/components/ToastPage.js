// Imports
import React, { useState } from "react"
import {Toast } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const ToastPage = () => {
    const [isOpen, setIsOpen] = useState(true)

    const demo = [
        {
            title: "Title only",
            code: '<Toast title="Title" />',
            demo: <Toast title="Title" />,
        },
        {
            title: "Title and body",
            code: '<Toast title="Title">Message</Toast>',
            demo: <Toast title="Title">Message</Toast>,
        },
        {
            title: "Title with icon",
            code: '<Toast title="Title" icon="close-circle" iconColor="danger">\n    Message\n</Toast>',
            demo: (
                <Toast title="Title" icon="close-circle" iconColor="danger">
                    Message
                </Toast>
            ),
        },
        {
            title: "Title with close button",
            code: 'const [isOpen, setIsOpen] = useState(true)\n\n<Toast\n    title="Title"\n    icon="check-circle"\n    iconColor="success"\n    close={() => setIsOpen(false)}\n    isOpen={isOpen}\n>\n    Message\n</Toast>',
            demo: (
                <Toast
                    title="Title"
                    icon="check-circle"
                    iconColor="success"
                    close={() => setIsOpen(false)}
                    isOpen={isOpen}
                >
                    Message
                </Toast>
            ),
        },
    ]
    
    const props = [
        {
            name: "close",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "isOpen",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "true",
            required: "No",
        },
        {
            name: "title",
            type: "String",
            example: "You have a new message!",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "children",
            type: "String",
            example: "A longer message",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "check",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconColor",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "current",
            required: "No",
        },
        {
            name: "shadow",
            type: "String",
            example: "xs",
            possible: possible.shadows,
            default: "s",
            required: "No",
        },
        {
            name: "customIconClose",
            type: "String",
            example: "close-circle",
            possible: "-",
            default: "x",
            required: "No",
        },
        {
            name: "radius",
            type: "String or Number",
            example: "8",
            possible: possible.radiuses,
            default: "m",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Toast" back="/components" component="Toast">
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

export default ToastPage
