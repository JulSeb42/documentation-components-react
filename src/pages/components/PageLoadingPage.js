// Packages
import React from "react"
import { Font } from "components-react-julseb"
import { Link } from "react-router-dom"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const PageLoadingPage = () => {
    const props = [
        {
            name: "backgroundColor",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "primary",
            required: "No",
        },
    ]
    
    return (
        <PageDemo
            title="PageLoading"
            category="components"
            import="PageLoading"
        >
            <DemoItem code={'<PageLoading backgroundColor="secondary" />'}>
                <Font.P>
                    <Link
                        to="/components/page-loading/demo-page-loading"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Demo here
                    </Link>
                </Font.P>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default PageLoadingPage

