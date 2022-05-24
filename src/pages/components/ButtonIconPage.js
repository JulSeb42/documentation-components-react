// Imports
import React from "react"
import { ButtonIcon } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const ButtonIconPage = () => {
    // Props
    const props = [
        {
            name: "icon",
            type: "String",
            example: "email",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "btnStyle",
            type: "String",
            example: "transparent",
            possible: '"plain" | "transparent"',
            default: "plain",
            required: "No",
        },
        {
            name: "size",
            type: "Number",
            example: "32",
            possible: "-",
            default: "48",
            required: "No",
        },
        {
            name: "color",
            type: "String",
            example: "danger",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "colorHover (only if you use a custom color)",
            type: "String",
            example: "#C3C3C3",
            possible: "-",
            default: "Variables.Colors.Primary300",
            required: "No",
        },
        {
            name: "colorActive (only if you use a custom color)",
            type: "String",
            example: "#C6C6C6",
            possible: "-",
            default: "Variables.Colors.Primary600",
            required: "No",
        },
        {
            name: "hoverBackground",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "to",
            type: "String",
            example: "/contact",
            possible: "-",
            default: "None",
            required: "If you want to use the button as a link",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Button icon"
            back="/components"
            component="ButtonIcon"
        >
            <DemoItem
                title="Plain"
                code={'<ButtonIcon btnStyle="plain" icon="mail" />'}
            >
                <ButtonIcon btnStyle="plain" icon="mail" />
            </DemoItem>

            <DemoItem
                title="Transparent"
                code={
                    '<ButtonIcon\n    btnStyle="transparent"\n    color="secondary"\n    icon="mail"\n    hoverBackground\n/>'
                }
            >
                <ButtonIcon
                    btnStyle="transparent"
                    color="secondary"
                    icon="mail"
                    hoverBackground
                />
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default ButtonIconPage
