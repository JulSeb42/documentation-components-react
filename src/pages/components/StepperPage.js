// Imports
import React from "react"
import { Stepper } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const StepperPage = () => {
    const steps = [
        {
            text: "Step",
            to: "#",
        },
        {
            text: "Step",
            to: "#",
        },
        {
            text: "Step",
        },
        {
            text: "Step",
        },
    ]

    const demo = [
        {
            code: 'const steps = [\n    {\n        text: "Step",\n        to: "#",\n    },\n    {\n        text: "Step",\n        to: "#",\n    },\n    {\n        text: "Step",\n    },\n    {\n        text: "Step",\n    },\n]\n\n<Stepper active={2} steps={steps} />',
            demo: <Stepper active={2} steps={steps} />,
        },
    ]

    const props = [
        {
            name: "steps",
            type: "Array",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "active",
            type: "Number",
            example: "3",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "text (step)",
            type: "String",
            example: "Basic info",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "to (step)",
            type: "String",
            example: "/steps/2",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Stepper" back="/components" component="Stepper">
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

export default StepperPage
