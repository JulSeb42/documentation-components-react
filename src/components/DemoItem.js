// Packages
import React from "react"
import { Font } from "components-react-julseb"
import Linkify from "react-linkify"
import { Grid, Variables } from "components-react-julseb"

// Components
import { DemoContainer, DemoContent, DemoCode } from "./DemoContainer"

const DemoItem = props => {
    return (
        <>
            {(props.title || props.subtitle || props.helper) && (
                <Grid gap={Variables.Spacers.XS}>
                    {props.title && <Font.H2>{props.title}</Font.H2>}

                    {props.subtitle && <Font.H3>{props.subtitle}</Font.H3>}

                    {props.helper && (
                        <Font.P>
                            <Linkify
                                componentDecorator={(
                                    decoratedHref,
                                    decoratedText,
                                    key
                                ) => (
                                    <a
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        href={decoratedHref}
                                        key={key}
                                    >
                                        {decoratedText}
                                    </a>
                                )}
                            >
                                {props.helper}
                            </Linkify>
                        </Font.P>
                    )}
                </Grid>
            )}

            <DemoContainer>
                <DemoContent>{props.children}</DemoContent>

                <DemoCode>{props.code}</DemoCode>
            </DemoContainer>
        </>
    )
}

export default DemoItem
