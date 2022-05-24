// Imports
import React from "react"
import { Font } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const PageLoadingPage = () => {
    const props = [
        {
            name: "background",
            type: "String",
            example: "success",
            possible: possible.colors,
            default: "primary",
            required: "No",
        },
        {
            name: "loaderColor",
            type: "String",
            example: "danger",
            possible: possible.colors,
            default: "white",
            required: "No",
        },
        {
            name: "loaderSize",
            type: "Number",
            example: 80,
            possible: "-",
            default: 48,
            required: "No",
        },
        {
            name: "loaderBorder",
            type: "Number",
            example: 4,
            possible: "-",
            default: 8,
            required: "No",
        },
        {
            name: "speed (in ms)",
            type: "Number",
            example: 3000,
            possible: "-",
            default: 1000,
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Page loading"
            back="/components"
            component="PageLoading"
        >
            <DemoItem code={'<PageLoading background="secondary" />'}>
                <Font.P>
                    <Link
                        to="/components/page-loading/demo"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Demo here.
                    </Link>
                </Font.P>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default PageLoadingPage
