// Imports
import React from "react"
import { Wrapper, Main, Form, Font, Input } from "tsx-library-julseb"

import BaseLayout from "../../components/BaseLayout"

const DemoContainerForm = () => {
    return (
        <BaseLayout title="Demo container form">
            <Wrapper>
                <Main width={400}>
                    <Font.H1>Main</Font.H1>

                    <Form btnPrimary="Send">
                        <Input label="Input" />
                    </Form>
                </Main>
            </Wrapper>
        </BaseLayout>
    )
}

export default DemoContainerForm
