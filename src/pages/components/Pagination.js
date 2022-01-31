// Packages
import React from "react"
import { Pagination, PaginationButton } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function PaginationDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Pagination>
                        <PaginationButton icon="previous" disabled />
                        <PaginationButton number={1} className="active" />
                        <PaginationButton number={2} />
                        <PaginationButton number={3} />
                        <PaginationButton number={4} />
                        <PaginationButton number={5} />
                        <PaginationButton icon="next" />
                    </Pagination>
                </DemoContent>

                <DemoCode>
                    {
                        '<Pagination>\n    <PaginationButton icon="previous" disabled />\n    <PaginationButton number={1} className="active" />\n    <PaginationButton number={2} />\n    <PaginationButton number={3} />\n    <PaginationButton number={4} />\n    <PaginationButton number={5} />\n    <PaginationButton icon="next" />\n</Pagination>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps comment="All the props are for the buttons.">
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>previous or next</td>
                    <td>None</td>
                    <td>Yes, for first and last one</td>
                </tr>
                <tr>
                    <td>number</td>
                    <td>Number</td>
                    <td>1</td>
                    <td>None</td>
                    <td>Yes, but not for first and last one</td>
                </tr>
                <tr>
                    <td>className</td>
                    <td>String</td>
                    <td>active</td>
                    <td>None</td>
                    <td>Yes for active page</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default PaginationDemo
