// Packages
import React from "react"
import { Stepper } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const StepperPage = () => {
    const props = [
        {
            name: "steps",
            type: "Array",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "active",
            type: "Number",
            example: "2",
            default: "None",
            required: "Yes",
        },
        {
            name: "text (step)",
            type: "String",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "to (step)",
            type: "String",
            example: "-",
            default: "None",
            required: "No",
        },
    ]

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
            to: "#",
        },
        {
            text: "Step",
            to: "#",
        },
    ]

    return (
        <PageDemo title="Stepper" category="components" import="Stepper">
            <DemoItem
                code={
                    'const steps = [\n    {\n        text: "Step",\n        to: "#",\n    },\n    {\n        text: "Step",\n        to: "#",\n    },\n    {\n        text: "Step",\n        to: "#",\n    },\n    {\n        text: "Step",\n        to: "#",\n    },\n]\n\n<Stepper active={2} steps={steps} />'
                }
            >
                <Stepper active={2} steps={steps} />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default StepperPage
