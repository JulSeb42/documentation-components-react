// Packages
import React from "react"
import { Link } from "react-router-dom"
import { Font } from "components-react-julseb"

import { DemoContainer, DemoContent, DemoCode } from "./DemoContainer"

const CardContainer = ({ item }) => {
    return (
        <>
            <Font.H2>{item.title}</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Font.P>
                        <Link
                            to={`/layouts/container/${item.url}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Demo here
                        </Link>
                    </Font.P>
                </DemoContent>

                <DemoCode>{item.code}</DemoCode>
            </DemoContainer>
        </>
    )
}

export default CardContainer
