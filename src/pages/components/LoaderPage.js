// Imports
import React from "react"
import { Loader } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const LoaderPage = () => {
    // Props
    // marginLeft?: number | string
    // marginRight?: number | string
    // speed?: number
    const props = [
        {
            name: "size",
            type: "Number",
            example: "80",
            possible: "-",
            default: "48",
            required: "No",
        },
        {
            name: "border",
            type: "Number",
            example: "4",
            possible: "-",
            default: "2",
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
            example: "black",
            possible: possible.colors,
            default: "white",
            required: "No",
        },
        {
            name: "marginLeft",
            type: "String or Number",
            example: "Variables.Spacers.XS",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "marginRight",
            type: "String or Number",
            example: "Variables.Spacers.L",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "speed (in ms)",
            type: "Number",
            example: "2000",
            possible: "-",
            default: "1000",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Loader" back="/components" component="Loader">
            <DemoItem
                code={`<Loader border={12} size={80} color="secondary" />`}
            >
                <Loader border={12} size={80} color="secondary" />
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default LoaderPage
