// Packages
import React from "react"
import { BasicCard, ImageCard, Font, Grid, Variables } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function CardDemo() {
    return (
        <>
            <Font.H2>Basic card</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.S}>
                        <BasicCard
                            title="Title"
                            subtitle="Subtitle"
                            button="Button"
                            btnstyle="text"
                            direction="portrait"
                            icon="credit-card"
                            iconcolor="rgb(38,109,211)"
                            btnnopadding
                            to="#"
                        />

                        <BasicCard
                            title="Title"
                            subtitle="Subtitle"
                            btnstyle="text"
                            direction="landscape"
                            icon="credit-card"
                            iconcolor="rgb(38,109,211)"
                            btnnopadding
                            iconsize={48}
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<BasicCard\n    title="Title"\n    subtitle="Subtitle"\n    button="Button"\n    btnstyle="text"\n    direction="portrait"\n    icon="credit-card"\n    iconcolor="rgb(38,109,211)"\n    btnnopadding\n    to="#"\n/>\n\n<BasicCard\n    title="Title"\n    btnstyle="text"\n    direction="landscape"\n    icon="credit-card"\n    iconcolor="rgb(38,109,211)"\n    btnnopadding\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>direction</td>
                    <td>String</td>
                    <td>landscape or portrait</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>subtitle</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>to</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>If you want to use the card as a link</td>
                </tr>
                <tr>
                    <td>button (text for the button)</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>btnstyle</td>
                    <td>String</td>
                    <td>Check button component for possible values</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>btncolor</td>
                    <td>String or variable</td>
                    <td>Check button component for possible values</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>btniconleft</td>
                    <td>String</td>
                    <td>Check button component for possible values</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>btniconright</td>
                    <td>String</td>
                    <td>Check button component for possible values</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>btnto (button link)</td>
                    <td>String</td>
                    <td>Check button component for possible values</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>onClickButton</td>
                    <td>Function</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>btnnopadding</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>iconcolor</td>
                    <td>String or variable</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>iconsize</td>
                    <td>Number</td>
                    <td>-</td>
                    <td>32</td>
                    <td>No</td>
                </tr>
            </TableProps>

            <Font.H2>Image card</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <ImageCard
                        title="Title"
                        subtitle="Subtitle"
                        to="#"
                        src="https://images.unsplash.com/photo-1642516303080-431f6681f864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Card"
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<ImageCard\n    title="Title"\n    subtitle="Subtitle"\n    to="#"\n    src="https://images.unsplash.com/photo-1642516303080-431f6681f864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"\n    alt="Card"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>src</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>alt</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>subtitle</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>to</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>If you want to use the card as a link</td>
                </tr>
            </TableProps>
        </>
    )
}

export default CardDemo
