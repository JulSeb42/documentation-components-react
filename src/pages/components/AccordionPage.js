// Packages
import React from "react"
import { Accordion, AccordionItem } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const AccordionPage = () => {
    // accordionStyle, icon, isOpen, children, title
    const props = [
        {
            name: "accordionStyle (Accordion)",
            type: "String",
            example: "basic, rounded",
            default: "basic",
            required: "No",
        },
        {
            name: "title (AccordionItem)",
            type: "String",
            example: "Open",
            default: "None",
            required: "Yes",
        },
        {
            name: "children (AccordionItem)",
            type: "Any",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "isOpen (AccordionItem)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "plus, chevron",
            default: "chevron",
            required: "No",
        },
    ]

    return (
        <PageDemo
            title="Accordion"
            category="components"
            import="Accordion, AccordionItem"
        >
            <DemoItem
                title="Basic"
                code={
                    '<Accordion accordionStyle="basic">\n    <AccordionItem title="Item" icon="chevron" isOpen>\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="chevron">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="chevron">\n        Content\n    </AccordionItem>\n</Accordion>'
                }
            >
                <Accordion accordionStyle="basic">
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
            </DemoItem>

            <DemoItem
                title="Rounded"
                code={
                    '<Accordion accordionStyle="rounded">\n    <AccordionItem title="Item" icon="plus">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="plus">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="plus">\n        Content\n    </AccordionItem>\n</Accordion>'
                }
            >
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
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default AccordionPage
