// Packages
import React from "react"
import { Badge, Font, Grid } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function BadgeDemo() {
    return (
        <>
            <Font.H2>Empty badge</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid col={5}>
                        <Badge color="primary" />
                        <Badge color="secondary" />
                        <Badge color="success" />
                        <Badge color="danger" />
                        <Badge color="warning" />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Badge color="primary" />\n<Badge color="secondary" />\n<Badge color="success" />\n<Badge color="danger" />\n<Badge color="warning" />'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>With number</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid col={5}>
                        <Badge color="primary" size={32}>
                            1
                        </Badge>
                        <Badge color="secondary" size={32}>
                            1
                        </Badge>
                        <Badge color="success" size={32}>
                            1
                        </Badge>
                        <Badge color="danger" size={32}>
                            1
                        </Badge>
                        <Badge color="warning" size={32}>
                            1
                        </Badge>
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Badge color="primary" size={32}>1</Badge>\n<Badge color="secondary" size={32}>1</Badge>\n<Badge color="success" size={32}>1</Badge>\n<Badge color="danger" size={32}>1</Badge>\n<Badge color="warning" size={32}>1</Badge>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>With icon</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid col={5}>
                        <Badge color="primary" size={48} icon="star" />
                        <Badge color="secondary" size={48} icon="star" />
                        <Badge color="success" size={48} icon="star" />
                        <Badge color="danger" size={48} icon="star" />
                        <Badge color="warning" size={48} icon="star" />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Badge color="primary" size={48} icon="star" />\n<Badge color="secondary" size={48} icon="star" />\n<Badge color="success" size={48} icon="star" />\n<Badge color="danger" size={48} icon="star" />\n<Badge color="warning" size={48} icon="star" />'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>color</td>
                    <td>String value or variable</td>
                    <td>primary, secondary, success, danger, warning</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>size</td>
                    <td>Number</td>
                    <td>24</td>
                    <td>16</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>user</td>
                    <td>None</td>
                    <td>Only if you want an icon</td>
                </tr>

                <tr>
                    <td>children</td>
                    <td>Number</td>
                    <td>2</td>
                    <td>None</td>
                    <td>Only if you want a number</td>
                </tr>
            </TableProps>
        </>
    )
}

export default BadgeDemo
