// Packages
import React from "react"
import { Font, TitleFlex, Button } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"

const TitleFlexPage = () => {
    return (
        <PageDemo title="TitleFlex" category="components" import="TitleFlex">
            <DemoItem
                code={
                    '<TitleFlex>\n    <Font.H2>Title</Font.H2>\n\n    <Button btnstyle="plain" color="primary">\n        Button\n    </Button>\n</TitleFlex>'
                }
            >
                <TitleFlex>
                    <Font.H2>Title</Font.H2>

                    <Button btnstyle="plain" color="primary">
                        Button
                    </Button>
                </TitleFlex>
            </DemoItem>
        </PageDemo>
    )
}

export default TitleFlexPage
