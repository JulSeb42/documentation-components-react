// Packages
import React from "react"
import { Accordion, AccordionItem, Font } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function AccordionDemo() {
    return (
        <>
            <Font.H2>Basic accordion</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Accordion accordionstyle="basic">
                        <AccordionItem title="Item" icon="chevron" isOpen>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </AccordionItem>

                        <AccordionItem title="Item" icon="chevron">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </AccordionItem>

                        <AccordionItem title="Item" icon="chevron">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </AccordionItem>
                    </Accordion>
                </DemoContent>

                <DemoCode>
                    {
                        '<Accordion accordionstyle="basic">\n    <AccordionItem title="Item" icon="chevron" isOpen>\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="chevron">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="chevron">\n        Content\n    </AccordionItem>\n</Accordion>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Rounded accordion</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Accordion accordionstyle="rounded">
                        <AccordionItem title="Item" icon="plus">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </AccordionItem>

                        <AccordionItem title="Item" icon="plus">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </AccordionItem>

                        <AccordionItem title="Item" icon="plus">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </AccordionItem>
                    </Accordion>
                </DemoContent>

                <DemoCode>
                    {
                        ' <Accordion accordionstyle="rounded">\n    <AccordionItem title="Item" icon="plus">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="plus">\n        Content\n    </AccordionItem>\n\n    <AccordionItem title="Item" icon="plus">\n        Content\n    </AccordionItem>\n</Accordion>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>accordionstyle (container)</td>
                    <td>String</td>
                    <td>basic, rounded</td>
                    <td>basic</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>title (item)</td>
                    <td>String</td>
                    <td>Title</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>icon (item)</td>
                    <td>String</td>
                    <td>plus, chevron</td>
                    <td>chevron</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>isOpen</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No, sets the item to open when loading the page</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
            </TableProps>
        </>
    )
}

export default AccordionDemo
