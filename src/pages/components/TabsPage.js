// Packages
import React, { useState } from "react"
import {
    TabsContainer,
    TabsButtonsContainer,
    TabsButton,
    TabsContent,
} from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const TabsPage = () => {
    // col, active, children, onClick,
    const props = [
        {
            name: "col (TabsButtonsContainer)",
            type: "Number",
            example: "3",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClick (TabsButton)",
            type: "Function",
            example: "() => setActive(i)",
            default: "None",
            required: "Yes",
        },
        {
            name: "active (TabsButton)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "children (TabsButton)",
            type: "String",
            example: "Tab 1",
            default: "None",
            required: "Yes",
        },
        {
            name: "active (TabsContent)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "children (TabsContent)",
            type: "Any",
            example: "-",
            default: "None",
            required: "Yes",
        },
    ]

    const [active, setActive] = useState(1)

    return (
        <PageDemo
            title="Tabs"
            category="components"
            import="TabsContainer, TabsButtonsContainer, TabsButton, TabsContent"
        >
            <DemoItem
                code={
                    "const [active, setActive] = useState(1)\n\n<TabsContainer>\n    <TabsButtonsContainer col={3}>\n        <TabsButton onClick={() => setActive(1)} active={active === 1 && true}>\n            Tab 1\n        </TabsButton>\n\n        <TabsButton onClick={() => setActive(2)} active={active === 2 && true}>\n            Tab 2\n        </TabsButton>\n\n        <TabsButton onClick={() => setActive(3)} active={active === 3 && true}>\n            Tab 3\n        </TabsButton>\n    </TabsButtonsContainer>\n\n    <TabsContent active={active === 1 && true}>\n        Content tab 1\n    </TabsContent>\n\n    <TabsContent active={active === 2 && true}>\n        Content tab 2\n    </TabsContent>\n\n    <TabsContent active={active === 3 && true}>\n        Content tab 3\n    </TabsContent>\n</TabsContainer>"
                }
            >
                <TabsContainer>
                    <TabsButtonsContainer col={3}>
                        <TabsButton
                            onClick={() => setActive(1)}
                            active={active === 1 && true}
                        >
                            Tab 1
                        </TabsButton>

                        <TabsButton
                            onClick={() => setActive(2)}
                            active={active === 2 && true}
                        >
                            Tab 2
                        </TabsButton>

                        <TabsButton
                            onClick={() => setActive(3)}
                            active={active === 3 && true}
                        >
                            Tab 3
                        </TabsButton>
                    </TabsButtonsContainer>

                    <TabsContent active={active === 1 && true}>
                        Content tab 1
                    </TabsContent>

                    <TabsContent active={active === 2 && true}>
                        Content tab 2
                    </TabsContent>

                    <TabsContent active={active === 3 && true}>
                        Content tab 3
                    </TabsContent>
                </TabsContainer>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default TabsPage
