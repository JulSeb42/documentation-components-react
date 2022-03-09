// Packages
import React from "react"
import { Variables, Toast } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ToastPage = () => {
    const props = [
        {
            name: "title",
            type: "String",
            example: "You have a new message",
            default: "None",
            required: "Yes",
        },
        {
            name: "children",
            type: "String",
            example: "Check them now",
            default: "None",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "warning",
            default: "None",
            required: "No",
        },
        {
            name: "iconColor",
            type: "String value or Variable",
            example: "Variables.Colors.Danger500",
            default: "None",
            required: "No",
        },
        {
            name: "close",
            type: "Function",
            example: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageDemo title="Toast" category="components" import="Toast">
            <DemoItem title="Title only" code={'<Toast title="Title" />'}>
                <Toast title="Title" />
            </DemoItem>

            <DemoItem
                title="Title with icon"
                code={
                    '<Toast title="Title" icon="check-circle" iconColor={Variables.Colors.Success500}>\n    Message\n</Toast>'
                }
            >
                <Toast
                    title="Title"
                    icon="check-circle"
                    iconColor={Variables.Colors.Success500}
                >
                    Message
                </Toast>
            </DemoItem>

            <DemoItem
                title="Title and close button"
                code={
                    '<Toast title="Title" icon="check-circle" iconColor={Variables.Colors.Success500} close>\n    Message\n</Toast>'
                }
            >
                <Toast
                    title="Title"
                    icon="check-circle"
                    iconColor={Variables.Colors.Success500}
                    close
                >
                    Message
                </Toast>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ToastPage
