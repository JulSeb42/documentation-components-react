// Imports
import React from "react"
import { Accordion, AccordionItem } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const AccordionPage = () => {
    const demo = [
        {
            title: "Basic",
            code: '<Accordion>\n    <AccordionItem title="Title" icon="chevron" isOpen>\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Title" icon="chevron">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Title" icon="chevron">\n        Content\n    </AccordionItem>\n</Accordion>',
            demo: (
                <Accordion>
                    <AccordionItem title="Item" icon="chevron" isOpen>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </AccordionItem>

                    <AccordionItem title="Item" icon="chevron">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </AccordionItem>

                    <AccordionItem title="Item" icon="chevron">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </AccordionItem>
                </Accordion>
            ),
        },
        {
            title: "Rounded",
            code: '<Accordion accordionStyle="rounded">\n    <AccordionItem title="Title" icon="plus">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Title" icon="plus">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Title" icon="plus">\n        Content\n    </AccordionItem>\n</Accordion>',
            demo: (
                <Accordion accordionStyle="rounded">
                    <AccordionItem title="Item" icon="plus">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </AccordionItem>

                    <AccordionItem title="Item" icon="plus">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </AccordionItem>

                    <AccordionItem title="Item" icon="plus">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </AccordionItem>
                </Accordion>
            ),
        },
    ]

    const props = [
        {
            name: "accordionStyle (Accordion)",
            type: "String",
            example: "rounded",
            possible: '"basic" | "rounded"',
            default: "basic",
            required: "No",
        },
        {
            name: "borderColor (Accordion)",
            type: "String",
            example: "secondary",
            possible:
                '"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "black" | "gray" | any string',
            default: "Variables.Colors.Gray200 for basic, white for rounded",
            required: "No",
        },
        {
            name: "backgroundColor (Accordion, if rounded)",
            type: "String",
            example: "success",
            possible:
                '"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "black" | "gray" | any string',
            default: "primary",
            required: "No",
        },
        {
            name: "titleColor (Accordion)",
            type: "String",
            example: "secondary",
            possible:
                '"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "black" | "gray" | any string',
            default: "primary for basic, white for rounded",
            required: "No",
        },
        {
            name: "iconColor (Accordion)",
            type: "String",
            example: "warning",
            possible:
                '"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "black" | "gray" | any string',
            default: "primary for basic, white for rounded",
            required: "No",
        },
        {
            name: "icon (AccordionItem)",
            type: "String",
            example: "chevron",
            possible: '"chevron" | "plus"',
            default: "plus",
            required: "No",
        },
        {
            name: "title",
            type: "String",
            example: "Open",
            possible: "-",
            default: "Title",
            required: "No",
        },
        {
            name: "isOpen (AccordionItem)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Accordion"
            back="/components"
            component="Accordion, AccordionItem"
        >
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

export default AccordionPage
