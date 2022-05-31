// Imports
import React from "react"
import { Font, CodeContainer } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import { TableProps, TableItem } from "../../components/TableProps"

const HelmetPage = () => {
    const props = [
        {
            name: "title",
            type: "String",
            example: "About",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "description",
            type: "String",
            example: "About page",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "keywords",
            type: "Array of strings, or String",
            example: '["development", "react"]',
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "favicon",
            type: "String",
            example: "/favicon.svg",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "author",
            type: "String",
            example: "Julien Sebag",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "type",
            type: "String",
            example: "blog",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "cover",
            type: "String",
            example: "/images/cover.jpg",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "siteName",
            type: "String",
            example: "Amazing blog",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "language",
            type: "String",
            example: "fr",
            possible: "-",
            default: "en",
            required: "No",
        },
        {
            name: "children",
            type: "Any",
            example: "-",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Helmet" back="/components" component="Helmet">
            <Font.P>
                A component for{" "}
                <a
                    href="https://www.npmjs.com/package/react-helmet"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-helmet
                </a>
                .
            </Font.P>

            <CodeContainer language="javascript">
                {'<Helmet title="Page title" />'}
            </CodeContainer>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default HelmetPage
