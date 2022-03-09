// Packages
import React from "react"
import { Variables, Grid, InputCheck } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const InputCheckPage = () => {
    const props = [
        {
            name: "id",
            type: "String",
            example: "checkbox",
            default: "None",
            required: "Yes",
        },
        {
            name: "type",
            type: "String",
            example: "checkbox, radio",
            default: "checkbox",
            required: "No",
        },
        {
            name: "label",
            type: "String",
            example: "Sort by price",
            default: "None",
            required: "Required only for selector",
        },
        {
            name: "selector",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "Toggle",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },

        {
            name: "defaultChecked",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "justify",
            type: "String",
            example: "start, center, end",
            default: "None",
            required: "No, but use it when the button is inside a grid",
        },
    ]

    return (
        <PageDemo title="InputCheck" category="components" import="InputCheck">
            <DemoItem
                title="Checkbox"
                code={
                    '<InputCheck label="Checkbox" id="checkbox-1" type="checkbox" name="checkbox" />\n<InputCheck label="Checkbox" id="checkbox-2" type="checkbox" defaultChecked={true} name="checkbox" />\n<InputCheck label="Checkbox" id="checkbox-3" type="checkbox" disabled name="checkbox-disabled" />\n<InputCheck label="Checkbox" id="checkbox-4" type="checkbox" defaultChecked={true} disabled name="checkbox-disabled" />'
                }
            >
                <Grid gap={Variables.Spacers.XXS}>
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
                        id="checkbox-3"
                        type="checkbox"
                        disabled
                        justify="start"
                        name="checkbox-disabled"
                    />

                    <InputCheck
                        label="Checkbox"
                        id="checkbox-4"
                        type="checkbox"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="checkbox-disabled"
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                title="Radio"
                code={
                    '<InputCheck label="Radio" id="radio-1" type="radio" name="radio" />\n\n<InputCheck label="Radio" id="radio-2" type="radio" defaultChecked={true} name="radio" />\n\n<InputCheck label="Radio" id="radio-3" type="radio" disabled name="radio-disabled" />\n\n<InputCheck label="Radio" id="radio-4" type="radio" defaultChecked={true} disabled name="radio-disabled" />'
                }
            >
                <Grid gap={Variables.Spacers.XXS}>
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
                        id="radio-3"
                        type="radio"
                        disabled
                        justify="start"
                        name="radio-disabled"
                    />

                    <InputCheck
                        label="Radio"
                        id="radio-4"
                        type="radio"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="radio-disabled"
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                title="Toggle"
                code={
                    '<InputCheck label="Toggle" id="toggle-1" type="checkbox" name="toggle" toggle />\n\n<InputCheck label="Toggle" id="toggle-2" type="checkbox" defaultChecked={true} name="toggle" toggle />\n\n<InputCheck label="Toggle" id="toggle-3" type="checkbox" disabled name="toggle-disabled" toggle />\n\n<InputCheck label="Toggle" id="toggle-4" type="checkbox" defaultChecked={true} disabled name="toggle-disabled" toggle />'
                }
            >
                <Grid gap={Variables.Spacers.XXS}>
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
                        id="toggle-3"
                        type="checkbox"
                        disabled
                        justify="start"
                        name="toggle-disabled"
                        toggle
                    />

                    <InputCheck
                        label="Toggle"
                        id="toggle-4"
                        type="checkbox"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="toggle-disabled"
                        toggle
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                title="Selector"
                code={
                    '<InputCheck label="Selector" id="selector-1" name="selector" type="checkbox" selector />\n\n<InputCheck label="Selector" id="selector-2" name="selector" type="checkbox" defaultChecked={true} selector />\n\n<InputCheck label="Selector" id="selector-3" name="selector" type="checkbox" selector disabled />\n\n<InputCheck label="Selector" id="selector-4" name="selector" type="checkbox" defaultChecked={true} selector disabled />'
                }
            >
                <Grid gap={Variables.Spacers.XXS}>
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
                </Grid>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default InputCheckPage
