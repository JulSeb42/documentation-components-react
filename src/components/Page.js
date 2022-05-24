// Imports
import React from "react"
import { Main, Font, Button, Wrapper } from "tsx-library-julseb"
import PropTypes from "prop-types"

import BaseLayout from "./BaseLayout"

const Page = ({
    title,
    subtitle,
    description,
    keywords,
    cover,
    children,
    back,
}) => {
    return (
        <BaseLayout
            title={title}
            description={description}
            keywords={keywords}
            cover={cover}
        >
            <Wrapper template="1col">
                <Main width={800}>
                    {back && (
                        <Button
                            to={back}
                            iconLeft="chevron-left"
                            btnStyle="text"
                            justify="start"
                            noPadding
                        >
                            Back to the list
                        </Button>
                    )}

                    <Font.H1>{subtitle ? subtitle : title}</Font.H1>

                    {children}
                </Main>
            </Wrapper>
        </BaseLayout>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    keywords: PropTypes.array,
    cover: PropTypes.string,
    template: PropTypes.string,
    children: PropTypes.node,
}

export default Page
