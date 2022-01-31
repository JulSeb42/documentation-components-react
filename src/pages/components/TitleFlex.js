// Packages
import React from "react"
import { TitleFlex, Font, Button } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"

function TitleFlexDemo() {
    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <TitleFlex>
                        <Font.H2>Title</Font.H2>
                        <Button btnstyle="plain" color="primary">
                            Button
                        </Button>
                    </TitleFlex>
                </DemoContent>

                <DemoCode>
                    {
                        '<TitleFlex>\n    <Font.H2>Title</Font.H2>\n    <Button btnstyle="plain" color="primary">\n        Button\n    </Button>\n</TitleFlex>'
                    }
                </DemoCode>
            </DemoContainer>
        </>
    )
}

export default TitleFlexDemo
