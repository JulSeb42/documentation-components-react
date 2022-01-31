// Packages
import React, { useState } from "react"
import { Burger } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function BurgerDemo() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <Burger
                        onClick={() => setIsOpen(!isOpen)}
                        className={isOpen ? "open" : ""}
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Burger onClick={() => setIsOpen(!isOpen)} className={isOpen ? "open" : ""} />'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>onClick</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>className</td>
                    <td>String</td>
                    <td>active (see example)</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>Number</td>
                    <td>30</td>
                    <td>32</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>Number</td>
                    <td>20</td>
                    <td>24</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>String or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>border</td>
                    <td>Number</td>
                    <td>1</td>
                    <td>2</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default BurgerDemo
