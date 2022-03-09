// Packages
import React from "react"
import { ButtonsContainer, Button } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ButtonsContainerPage = () => {
    const props = [
        {
            name: "gap",
            type: "String value or Variable",
            example: "24px",
            default: "Variables.Spacers.S",
            required: "No",
        },
    ]
    
    return (
        <PageDemo
            title="ButtonsContainer"
            category="components"
            import="ButtonsContainer"
        >
            <DemoItem
                code={
                    '<ButtonsContainer>\n    <Button btnStyle="plain" color="primary">\n        Button\n    </Button>\n\n    <Button btnStyle="text" color="primary">\n        Button\n    </Button>\n</ButtonsContainer>'
                }
            >
                <ButtonsContainer>
                    <Button btnStyle="plain" color="primary">
                        Button
                    </Button>

                    <Button btnStyle="text" color="primary">
                        Button
                    </Button>
                </ButtonsContainer>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ButtonsContainerPage

