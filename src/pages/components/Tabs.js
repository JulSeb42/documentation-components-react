// Packages
import React, { useState } from "react"
import {
    TabsContainer,
    TabsButtonsContainer,
    TabsButton,
    TabsContent,
} from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function TabsDemo() {
    const [active, setActive] = useState(1)
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <TabsContainer>
                        <TabsButtonsContainer col={3}>
                            <TabsButton
                                onClick={() => setActive(1)}
                                className={active === 1 ? "active" : ""}
                            >
                                Tab 1
                            </TabsButton>

                            <TabsButton
                                onClick={() => setActive(2)}
                                className={active === 2 ? "active" : ""}
                            >
                                Tab 2
                            </TabsButton>

                            <TabsButton
                                onClick={() => setActive(3)}
                                className={active === 3 ? "active" : ""}
                            >
                                Tab 3
                            </TabsButton>
                        </TabsButtonsContainer>

                        <TabsContent className={active === 1 ? "active" : ""}>
                            Content tab 1
                        </TabsContent>

                        <TabsContent className={active === 2 ? "active" : ""}>
                            Content tab 2
                        </TabsContent>

                        <TabsContent className={active === 3 ? "active" : ""}>
                            Content tab 3
                        </TabsContent>
                    </TabsContainer>
                </DemoContent>

                <DemoCode>
                    {
                        'const [active, setActive] = useState(1)\n\n<TabsContainer>\n    <TabsButtonsContainer col={3}>\n        <TabsButton\n            onClick={() => setActive(1)}\n            className={active === 1 ? "active" : ""}\n        >\n            Tab 1\n        </TabsButton>\n\n        <TabsButton\n            onClick={() => setActive(2)}\n            className={active === 2 ? "active" : ""}\n        >\n            Tab 2\n        </TabsButton>\n\n        <TabsButton\n            onClick={() => setActive(3)}\n            className={active === 3 ? "active" : ""}\n        >\n            Tab 3\n        </TabsButton>\n    </TabsButtonsContainer>\n\n    <TabsContent className={active === 1 ? "active" : ""}>\n        Content tab 1\n    </TabsContent>\n\n    <TabsContent className={active === 2 ? "active" : ""}>\n        Content tab 2\n    </TabsContent>\n\n    <TabsContent className={active === 3 ? "active" : ""}>\n        Content tab 3\n    </TabsContent>\n</TabsContainer>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>col (TabsButtonsContainer)</td>
                    <td>Number</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onClick (TabButton)</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>className (TabButton)</td>
                    <td>String</td>
                    <td>active (see example)</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>className (TabsContent)</td>
                    <td>String</td>
                    <td>active (see example)</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>Any</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
            </TableProps>
        </>
    )
}

export default TabsDemo
