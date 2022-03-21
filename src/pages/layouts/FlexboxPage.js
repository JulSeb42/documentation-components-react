// Packages
import React from "react"
import { Variables, Flexbox, InputCheck } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const FlexboxPage = () => {
    const props = [
        // align, justify, direction, gap
        {
            name: "align",
            type: "String",
            example: "flex-end",
            default: "flex-start",
            required: "No",
        },
        {
            name: "justify",
            type: "String",
            example: "flex-end",
            default: "flex-start",
            required: "No",
        },
        {
            name: "direction",
            type: "String",
            example: "column",
            default: "row",
            required: "No",
        },
        {
            name: "wrap",
            type: "String",
            example: "wrap",
            default: "nowrap",
            required: "No",
        },
        {
            name: "gap",
            type: "String or Variable",
            example: "16px",
            default: "0",
            required: "No",
        },
    ]

    return (
        <PageDemo title="Flexbox" category="layouts" import="Flexbox">
            <DemoItem
                code={
                    '<Flexbox gap={Variables.Spacers.XS} direction="row">\n    <InputCheck\n        label="Selector"\n        id="selector-1"\n        name="selector"\n        type="checkbox"\n        selector\n    />\n\n    <InputCheck\n        label="Selector"\n        id="selector-2"\n        name="selector"\n        type="checkbox"\n        selector\n    />\n\n    <InputCheck\n        label="Selector"\n        id="selector-3"\n        name="selector"\n        type="checkbox"\n        selector\n    />\n</Flexbox>'
                }
            >
                <Flexbox gap={Variables.Spacers.XS} direction="row">
                    <InputCheck
                        label="Selector"
                        id="selector-1"
                        name="selector"
                        type="checkbox"
                        selector
                    />

                    <InputCheck
                        label="Selector"
                        id="selector-2"
                        name="selector"
                        type="checkbox"
                        selector
                    />

                    <InputCheck
                        label="Selector"
                        id="selector-3"
                        name="selector"
                        type="checkbox"
                        selector
                    />
                </Flexbox>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default FlexboxPage
