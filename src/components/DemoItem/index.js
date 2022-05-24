// Imports
import React from "react"
import { Font, Variables, Grid } from "tsx-library-julseb"
import Linkify from "react-linkify"

import { DemoContainer, DemoContent, DemoCode } from "./styles"

const DemoItem = ({ title, subtitle, helper, children, code }) => {
    return (
        <Grid gap="s">
            {(title || subtitle || helper) && (
                <Grid gap={Variables.Spacers.XS}>
                    {title && <Font.H4 as="h2">{title}</Font.H4>}

                    {subtitle && <Font.H5 as="h3">{subtitle}</Font.H5>}

                    {helper && (
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
                                {helper}
                            </Linkify>
                        </Font.P>
                    )}
                </Grid>
            )}

            <DemoContainer>
                <DemoContent>{children}</DemoContent>

                <DemoCode language="javascript">{code}</DemoCode>
            </DemoContainer>
        </Grid>
    )
}

export default DemoItem
