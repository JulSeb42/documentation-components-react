// Packages
import React from "react"
import { ButtonIcon } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ButtonIconPage = () => {
    const props = [
        {
            name: "icon",
            type: "String",
            example: "mail",
            default: "None",
            required: "Yes",
        },
        {
            name: "size",
            type: "Number",
            example: "24",
            default: "48",
            required: "No",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "primary",
            required: "No",
        },
        {
            name: "to",
            type: "String",
            example: "/components",
            default: "None",
            required: "Yes if you want to use this button as a Link",
        },
    ]
    
    return (
        <PageDemo title="ButtonIcon" category="components" import="ButtonIcon">
            <DemoItem code={'<ButtonIcon icon="mail" />'}>
                <ButtonIcon icon="mail" />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ButtonIconPage

