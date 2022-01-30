// Packages
import React from "react"
import { Image, Font, Grid, Variables } from "components-react-julseb"

// Components
import { DemoContainer, DemoContent, DemoCode } from "../DemoContainer"

function DemoImage(props) {
    return (
        <>
            <Font.H2>Auto height</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.S}>
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

            <Font.H2>Fixed height, fit cover</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.S}>
                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            height="300px"
                            fit="cover"
                        />

                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            caption="Caption"
                            height="300px"
                            fit="cover"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    height="300px"\n    fit="cover"\n/>\n\n<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    caption="Caption"\n    height="300px"\n    fit="cover"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Fixed height, fit contain</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.S}>
                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            height="300px"
                            fit="contain"
                        />

                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="alt"
                            caption="Caption"
                            height="300px"
                            fit="contain"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    height="300px"\n    fit="contain"\n/>\n\n<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    caption="Caption"\n    height="300px"\n    fit="contain"\n/>'
                    }
                </DemoCode>
            </DemoContainer>
        </>
    )
}

export default DemoImage
