// Imports
import React from "react"
import { Font, Icon, Grid } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const IconPage = () => {
    // Props
    const props = [
        {
            name: "src",
            type: "String",
            example: "chevron-right",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "size",
            type: "Number",
            example: "48",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "color",
            type: "String or Variable",
            example: "blue",
            possible: possible.colors,
            default: "currentColor",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Icon" back="/components" component="Icon">
            <Font.H2>How to use</Font.H2>

            <Grid gap="xs">
                <Font.P>
                    Download SVG icons, and put them in the folder{" "}
                    <code>/public/icons</code>. Then you can use this component
                    normally.
                </Font.P>

                <Font.P>
                    All the icons on this library come from{" "}
                    <a
                        href="https://boxicons.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Boxicons
                    </a>
                    .
                </Font.P>
            </Grid>

            <DemoItem
                title="Icon component"
                code={'<Icon name="package" size={48} color="red" />'}
            >
                <Icon src="package" size={48} color="red" />
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default IconPage
