// Imports
import React, { useState } from "react"
import { Paginator } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const PaginatorPage = () => {
    const [active, setActive] = useState(1)

    const handleNext = () => setActive(active + 1)
    const handlePrev = () => setActive(active - 1)
    const handleChange = e => setActive(parseInt(e.target.value))

    const demo = [
        {
            code: "const [active, setActive] = useState(1)\n\nconst handleNext = () => setActive(active + 1)\nconst handlePrev = () => setActive(active - 1)\nconst handleChange = e => setActive(parseInt(e.target.value))\n\n<Paginator\n    active={active}\n    totalPages={10}\n    handlePrev={handlePrev}\n    handleNext={handleNext}\n    handleChange={handleChange}\n/>",
            demo: (
                <Paginator
                    active={active}
                    totalPages={10}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    handleChange={handleChange}
                />
            ),
        },
    ]

    const props = [
        {
            name: "active",
            type: "Number",
            example: "4",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "totalPages",
            type: "Number",
            example: "42",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "handleChange",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "handleNext",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "handlePrev",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "customIconNext",
            type: "String",
            example: "arrow-right",
            possible: "-",
            default: "chevron-right",
            required: "No",
        },
        {
            name: "customIconPrev",
            type: "String",
            example: "arrow-left",
            possible: "-",
            default: "chevron-left",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Paginator"
            back="/components"
            component="Paginator"
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

export default PaginatorPage
