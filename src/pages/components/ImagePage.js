// Packages
import React from "react"
import { Font, Variables, Grid, Image } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { DemoContainer, DemoContent, DemoCode } from "../../components/DemoContainer"
import { TableProps, TableItem } from "../../components/TableProps"

const ImagePage = () => {
    const props = [
        {
            name: "src",
            type: "String",
            example: "https://image.com",
            default: "None",
            required: "Yes",
        },
        {
            name: "alt",
            type: "String",
            example: "Picture",
            default: "None",
            required: "Yes",
        },
        {
            name: "width",
            type: "String value, Number or Variable",
            example: "300px",
            default: "100%",
            required: "No",
        },
        {
            name: "height",
            type: "String value, Number or Variable",
            example: "200px",
            default: "auto",
            required: "No",
        },
        {
            name: "fit",
            type: "String",
            example: "fill, contain, cover, none or scale-down",
            default: "None",
            required: "No",
        },
        {
            name: "caption",
            type: "String",
            example: "Caption text",
            default: "None",
            required: "No",
        },
    ]
    
    return (
        <PageDemo title="Image" category="components" import="Image">
            <Font.H2>Auto height</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Spacers.S}>
                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                        />

                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            caption="Caption"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n/>\n\n<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    caption="Caption"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Cover</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Spacers.S}>
                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            height="400px"
                            fit="cover"
                        />

                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            caption="Caption"
                            height="400px"
                            fit="cover"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    height="400px"\n    fit="cover"\n/>\n\n<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    caption="Caption"\n    height="400px"\n    fit="cover"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Spacers.S}>
                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            height="400px"
                            fit="contain"
                        />

                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            caption="Caption"
                            height="400px"
                            fit="contain"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    height="400px"\n    fit="contain"\n/>\n\n<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    caption="Caption"\n    height="400px"\n    fit="contain"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Contain</Font.H2>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default ImagePage

