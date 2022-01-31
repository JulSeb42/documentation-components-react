// Packages
import React from "react"
import { ButtonsContainer, Button } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"

function ButtonsContainerDemo() {
    return (
        <DemoContainer>
            <DemoContent>
                <ButtonsContainer>
                    <Button btnstyle="plain" color="primary" justify="start">
                        Button
                    </Button>
                    <Button btnstyle="text" color="primary" justify="start">
                        Button
                    </Button>
                </ButtonsContainer>
            </DemoContent>

            <DemoCode>
                {
                    '<ButtonsContainer>\n    <Button btnstyle="plain" color="primary">Button</Button>\n    <Button btnstyle="text" color="primary">Button</Button>\n</ButtonsContainer>'
                }
            </DemoCode>
        </DemoContainer>
    )
}

export default ButtonsContainerDemo
