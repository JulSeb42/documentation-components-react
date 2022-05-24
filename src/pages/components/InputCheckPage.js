// Imports
import React from "react"
import { Variables, InputCheck, Flexbox } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const InputCheckPage = () => {
    const demo = [
        {
            title: "Checkbox",
            code: '<InputCheck\n    label="Checkbox"\n    id="checkbox-1"\n    type="checkbox"\n    justify="start"\n    name="checkbox"\n/>\n\n<InputCheck\n    label="Checkbox"\n    id="checkbox-2"\n    type="checkbox"\n    defaultChecked={true}\n    justify="start"\n    name="checkbox"\n/>\n\n<InputCheck\n    label="Checkbox"\n    id="checkbox-1"\n    type="checkbox"\n    disabled\n    justify="start"\n    name="checkbox-disabled"\n/>\n\n<InputCheck\n    label="Checkbox"\n    id="checkbox-2"\n    type="checkbox"\n    defaultChecked={true}\n    disabled\n    justify="start"\n    name="checkbox-disabled"\n/>',
            demo: (
                <Flexbox gap={Variables.Spacers.M}>
                    <InputCheck
                        label="Checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        justify="start"
                        name="checkbox"
                    />

                    <InputCheck
                        label="Checkbox"
                        id="checkbox-2"
                        type="checkbox"
                        defaultChecked={true}
                        justify="start"
                        name="checkbox"
                    />

                    <InputCheck
                        label="Checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        disabled
                        justify="start"
                        name="checkbox-disabled"
                    />

                    <InputCheck
                        label="Checkbox"
                        id="checkbox-2"
                        type="checkbox"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="checkbox-disabled"
                    />
                </Flexbox>
            ),
        },
        {
            title: "Radio",
            code: '<InputCheck\n    label="Radio"\n    id="radio-1"\n    type="radio"\n    justify="start"\n    name="radio"\n/>\n\n<InputCheck\n    label="Radio"\n    id="radio-2"\n    type="radio"\n    defaultChecked={true}\n    justify="start"\n    name="radio"\n/>\n\n<InputCheck\n    label="Radio"\n    id="radio-1"\n    type="radio"\n    disabled\n    justify="start"\n    name="radio-disabled"\n/>\n\n<InputCheck\n    label="Radio"\n    id="radio-2"\n    type="radio"\n    defaultChecked={true}\n    disabled\n    justify="start"\n    name="radio-disabled"\n/>',
            demo: (
                <Flexbox gap={Variables.Spacers.M}>
                    <InputCheck
                        label="Radio"
                        id="radio-1"
                        type="radio"
                        justify="start"
                        name="radio"
                    />

                    <InputCheck
                        label="Radio"
                        id="radio-2"
                        type="radio"
                        defaultChecked={true}
                        justify="start"
                        name="radio"
                    />

                    <InputCheck
                        label="Radio"
                        id="radio-1"
                        type="radio"
                        disabled
                        justify="start"
                        name="radio-disabled"
                    />

                    <InputCheck
                        label="Radio"
                        id="radio-2"
                        type="radio"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="radio-disabled"
                    />
                </Flexbox>
            ),
        },
        {
            title: "Toggle",
            code: '<InputCheck\n    label="Toggle"\n    id="toggle-1"\n    type="checkbox"\n    justify="start"\n    name="toggle"\n    toggle\n/>\n\n<InputCheck\n    label="Toggle"\n    id="toggle-2"\n    type="checkbox"\n    defaultChecked={true}\n    justify="start"\n    name="toggle"\n    toggle\n/>\n\n<InputCheck\n    label="Toggle"\n    id="toggle-1"\n    type="checkbox"\n    disabled\n    justify="start"\n    name="toggle-disabled"\n    toggle\n/>\n\n<InputCheck\n    label="Toggle"\n    id="toggle-2"\n    type="checkbox"\n    defaultChecked={true}\n    disabled\n    justify="start"\n    name="toggle-disabled"\n    toggle\n/>',
            demo: (
                <Flexbox gap={Variables.Spacers.M}>
                    <InputCheck
                        label="Toggle"
                        id="toggle-1"
                        type="checkbox"
                        justify="start"
                        name="toggle"
                        toggle
                    />

                    <InputCheck
                        label="Toggle"
                        id="toggle-2"
                        type="checkbox"
                        defaultChecked={true}
                        justify="start"
                        name="toggle"
                        toggle
                    />

                    <InputCheck
                        label="Toggle"
                        id="toggle-1"
                        type="checkbox"
                        disabled
                        justify="start"
                        name="toggle-disabled"
                        toggle
                    />

                    <InputCheck
                        label="Toggle"
                        id="toggle-2"
                        type="checkbox"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="toggle-disabled"
                        toggle
                    />
                </Flexbox>
            ),
        },
        {
            title: "Selector",
            code: '<InputCheck\n    label="Selector"\n    id="selector-1"\n    justify="start"\n    name="selector"\n    type="checkbox"\n    selector\n/>\n    \n<InputCheck\n    label="Selector"\n    id="selector-2"\n    justify="start"\n    name="selector"\n    type="checkbox"\n    defaultChecked={true}\n    selector\n/>\n    \n<InputCheck\n    label="Selector"\n    id="selector-3"\n    justify="start"\n    name="selector"\n    type="checkbox"\n    selector\n    disabled\n/>\n    \n<InputCheck\n    label="Selector"\n    id="selector-4"\n    justify="start"\n    name="selector"\n    type="checkbox"\n    defaultChecked={true}\n    selector\n    disabled\n/>',
            demo: (
                <Flexbox gap={Variables.Spacers.M}>
                    <InputCheck
                        label="Selector"
                        id="selector-1"
                        justify="start"
                        name="selector"
                        type="checkbox"
                        selector
                    />
                    <InputCheck
                        label="Selector"
                        id="selector-2"
                        justify="start"
                        name="selector"
                        type="checkbox"
                        defaultChecked={true}
                        selector
                    />
                    <InputCheck
                        label="Selector"
                        id="selector-3"
                        justify="start"
                        name="selector"
                        type="checkbox"
                        selector
                        disabled
                    />
                    <InputCheck
                        label="Selector"
                        id="selector-4"
                        justify="start"
                        name="selector"
                        type="checkbox"
                        defaultChecked={true}
                        selector
                        disabled
                    />
                </Flexbox>
            ),
        },
    ]

    const props = [
        {
            name: "id",
            type: "String",
            example: "consent",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "name",
            type: "String",
            example: "consent",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "type",
            type: "String",
            example: "radio",
            possible: '"checkbox" | "radio"',
            default: "checkbox",
            required: "No",
        },
        {
            name: "label",
            type: "String",
            example: "I consent to terms and services",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "selector",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "toggle",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "icon (for checkbox)",
            type: "String",
            example: "check-circle",
            possible: "-",
            default: "check",
            required: "No",
        },
        {
            name: "justify",
            type: "String",
            example: "center",
            possible: '"start" | "center" | "end" | "stretch"',
            default: "start",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Input check"
            back="/components"
            component="InputCheck"
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

export default InputCheckPage
