// Imports
import React from "react"
import { ProgressBar } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const ProgressBarPage = () => {
    const demo = [
        {
            code: "<ProgressBar value={30} />",
            demo: <ProgressBar value={30} />,
        },
    ]

    const props = [
        {
            name: "value",
            type: "Number",
            example: "42",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "height",
            type: "Number",
            example: 8,
            possible: "-",
            default: 16,
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
            name: "background",
            type: "String",
            example: "danger",
            possible: possible.colors,
            default: "Variables.Colors.Gray100",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Progress bar"
            back="/components"
            component="ProgressBar"
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

export default ProgressBarPage
