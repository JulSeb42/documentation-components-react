// Imports
import React, { useState } from "react"
import {
    Font,
    TabsContainer,
    TabsButtonsContainer,
    TabsButton,
    TabsContent,
} from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const TabsPage = () => {
    const [active, setActive] = useState(1)

    const tabs = [
        {
            title: "Tab 1",
            index: 1,
            content: "Content tab 1",
        },
        {
            title: "Tab 2",
            index: 2,
            content: "Content tab 2",
        },
        {
            title: "Tab 3",
            index: 3,
            content: "Content tab 3",
        },
    ]

    const demo = [
        {
            code: 'const [active, setActive] = useState(1)\n\nconst tabs = [\n    {\n        title: "Tab 1",\n        index: 1,\n        content: "Content tab 1",\n    },\n    {\n        title: "Tab 2",\n        index: 2,\n        content: "Content tab 2",\n    },\n    {\n        title: "Tab 3",\n        index: 3,\n        content: "Content tab 3",\n    },\n]\n\n<TabsContainer>\n    <TabsButtonsContainer col={tabs.length}>\n        {tabs.map(tab => (\n            <TabsButton\n                onClick={() => setActive(tab.index)}\n                active={active === tab.index && true}\n                key={tab.index}\n            >\n                {tab.title}\n            </TabsButton>\n        ))}\n    </TabsButtonsContainer>\n\n    {tabs.map(tab => (\n        <TabsContent\n            active={active === tab.index && true}\n            key={tab.index}\n            as={Font.P}\n        >\n            {tab.content}\n        </TabsContent>\n    ))}\n</TabsContainer>',
            demo: (
                <TabsContainer>
                    <TabsButtonsContainer col={tabs.length}>
                        {tabs.map(tab => (
                            <TabsButton
                                onClick={() => setActive(tab.index)}
                                active={active === tab.index && true}
                                key={tab.index}
                            >
                                {tab.title}
                            </TabsButton>
                        ))}
                    </TabsButtonsContainer>

                    {tabs.map(tab => (
                        <TabsContent
                            active={active === tab.index && true}
                            key={tab.index}
                            as={Font.P}
                        >
                            {tab.content}
                        </TabsContent>
                    ))}
                </TabsContainer>
            ),
        },
    ]

    const props = [
        {
            name: "col (TabsButtonsContainer)",
            type: "Number",
            example: 4,
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClick (TabsButton)",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "active (TabsButton & TabsContent)",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
    ]

    return (
        <PageComponent
            title="Tabs"
            back="/components"
            component="TabsContainer, TabsButtonsContainer, TabsButton, TabsContent"
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

export default TabsPage
