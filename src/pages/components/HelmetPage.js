// Packages
import React from "react"
import { Font } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { TableProps, TableItem } from "../../components/TableProps"

const HelmetPage = () => {
    const props = [
        {
            name: "title",
            type: "String",
            example: "Homepage",
            default: "None",
            required: "Yes",
        },
        {
            name: "description",
            type: "String",
            example: "-",
            default: "None",
            required: "No, but better for SEO",
        },
        {
            name: "keywords",
            type: "Array",
            example: "-",
            default: "None",
            required: "No, but better for SEO",
        },
        {
            name: "favicon",
            type: "String (url)",
            example: "-",
            default: "None",
            required: "No",
        },
        {
            name: "author",
            type: "String",
            example: "-",
            default: "None",
            required: "No, but better for SEO",
        },
        {
            name: "type",
            type: "String",
            example: "-",
            default: "None",
            required: "No, but better for SEO",
        },
        {
            name: "siteName",
            type: "String",
            example: "-",
            default: "None",
            required: "No, but better for SEO",
        },
        {
            name: "language",
            type: "String",
            example: "-",
            default: "None",
            required: "No, but better for SEO",
        },
        {
            name: "cover",
            type: "String (url)",
            example: "-",
            default: "None",
            required: "No",
        },
        {
            name: "children",
            type: "Any",
            example: "-",
            default: "None",
            required: "No, add what makes sense for your app's head",
        },
    ]

    return (
        <PageDemo title="Helmet" category="components" import="Helmet">
            <Font.P>
                A component for{" "}
                <a
                    href="https://www.npmjs.com/package/react-helmet"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-helmet
                </a>
                . If you want to use a custom favicon and your app was
                bootstraped with <code>Create React App</code>, go to{" "}
                <code>/public/index.html</code> and delete this line:{" "}
                <code>
                    {'<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />'}
                </code>
                .
            </Font.P>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default HelmetPage
