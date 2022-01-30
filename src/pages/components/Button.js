// Packages
import React from "react"
import { Button, Font, Grid } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function ButtonDemo(props) {
    return (
        <>
            <Font.H2>Plain button</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid col={8}>
                        <Button
                            btnstyle="plain"
                            color="primary"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="plain"
                            color="secondary"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="plain"
                            color="success"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button btnstyle="plain" color="danger" justify="start">
                            Button
                        </Button>
                        <Button
                            btnstyle="plain"
                            color="warning"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button btnstyle="plain" color="white" justify="start">
                            Button
                        </Button>
                        <Button
                            btnstyle="plain"
                            color="primary"
                            justify="start"
                            disabled
                        >
                            Button
                        </Button>
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Button btnstyle="plain" color="primary">\n    Button\n</Button>\n\n<Button btnstyle="plain" color="secondary">\n    Button\n</Button>\n\n<Button btnstyle="plain" color="success">\n    Button\n</Button>\n\n<Button btnstyle="plain" color="danger">\n    Button\n</Button>\n\n<Button btnstyle="plain" color="warning">\n    Button\n</Button>\n\n<Button btnstyle="plain" color="white">\n    Button\n</Button>\n\n<Button btnstyle="plain" color="primary" disabled>\n    Button\n</Button>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Text</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid col={8}>
                        <Button btnstyle="text" color="primary" justify="start">
                            Button
                        </Button>
                        <Button
                            btnstyle="text"
                            color="secondary"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button btnstyle="text" color="success" justify="start">
                            Button
                        </Button>
                        <Button btnstyle="text" color="danger" justify="start">
                            Button
                        </Button>
                        <Button btnstyle="text" color="warning" justify="start">
                            Button
                        </Button>
                        <Button btnstyle="text" color="white" justify="start">
                            Button
                        </Button>
                        <Button
                            btnstyle="text"
                            color="primary"
                            justify="start"
                            disabled
                        >
                            Button
                        </Button>
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Button btnstyle="text" color="primary">Button</Button>\n<Button btnstyle="text" color="secondary">Button</Button>\n<Button btnstyle="text" color="success">Button</Button>\n<Button btnstyle="text" color="danger">Button</Button>\n<Button btnstyle="text" color="warning">Button</Button>\n<Button btnstyle="text" color="white">Button</Button>\n<Button btnstyle="text" color="primary" disabled>Button</Button>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Outline</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid col={8}>
                        <Button
                            btnstyle="outline"
                            color="primary"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="outline"
                            color="secondary"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="outline"
                            color="success"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="outline"
                            color="danger"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="outline"
                            color="warning"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="outline"
                            color="white"
                            justify="start"
                        >
                            Button
                        </Button>
                        <Button
                            btnstyle="outline"
                            color="primary"
                            justify="start"
                            disabled
                        >
                            Button
                        </Button>
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Button btnstyle="outline" color="primary">Button</Button>\n<Button btnstyle="outline" color="secondary">Button</Button>\n<Button btnstyle="outline" color="success">Button</Button>\n<Button btnstyle="outline" color="danger">Button</Button>\n<Button btnstyle="outline" color="warning">Button</Button>\n<Button btnstyle="outline" color="white">Button</Button>\n<Button btnstyle="outline" color="primary" disabled>Button</Button>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>With icon left</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Button
                        btnstyle="plain"
                        color="primary"
                        justify="start"
                        iconleft="send"
                    >
                        Button
                    </Button>
                </DemoContent>

                <DemoCode>
                    {
                        '<Button btnstyle="plain" color="primary" iconleft="send">Button</Button>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>With icon right</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Button
                        btnstyle="plain"
                        color="primary"
                        justify="start"
                        iconright="chevron-down"
                    >
                        Button
                    </Button>
                </DemoContent>

                <DemoCode>
                    {
                        '<Button btnstyle="plain" color="primary" iconright="chevron-down">Button</Button>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Loading</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Button
                        btnstyle="plain"
                        color="primary"
                        justify="start"
                        disabled
                        loading={true}
                    >
                        Button
                    </Button>
                </DemoContent>

                <DemoCode>
                    {
                        '<Button btnstyle="plain" color="primary" disabled loading={true}>Button</Button>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>btnstyle</td>
                    <td>String</td>
                    <td>plain, text, outline</td>
                    <td>plain</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>color</td>
                    <td>String value or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>

                <tr>
                    <td>justify</td>
                    <td>String</td>
                    <td>start, center, end</td>
                    <td>None</td>
                    <td>No, but use it when the button is inside a grid</td>
                </tr>

                <tr>
                    <td>iconleft</td>
                    <td>String</td>
                    <td>send</td>
                    <td>None</td>
                    <td>No, only if you want to use an icon on the left</td>
                </tr>

                <tr>
                    <td>iconright</td>
                    <td>String</td>
                    <td>chevron-down</td>
                    <td>None</td>
                    <td>No, only if you want to use an icon on the right</td>
                </tr>

                <tr>
                    <td>to</td>
                    <td>String</td>
                    <td>/components</td>
                    <td>None</td>
                    <td>No, only if you want to use this button as a Link</td>
                </tr>

                <tr>
                    <td>nopadding</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No, if you want to have paddings at 0</td>
                </tr>
            </TableProps>
        </>
    )
}

export default ButtonDemo