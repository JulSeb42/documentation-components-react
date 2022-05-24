// Imports
import React from "react"
import { Font, Grid } from "tsx-library-julseb"

import { Table, Head, Body } from "./Table"

const TableProps = props => {
    return (
        <Grid gap="s">
            <Font.H4 as="h2">Props</Font.H4>

            {props.comment && <Font.P>{props.comment}</Font.P>}

            <Table>
                <Head>
                    <tr>
                        <td>Prop name</td>
                        <td>Prop type</td>
                        <td>Example value</td>
                        <td>Possible values</td>
                        <td>Default</td>
                        <td>Required</td>
                    </tr>
                </Head>

                <Body>{props.children}</Body>
            </Table>
        </Grid>
    )
}

const TableItem = ({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.example}</td>
            <td>{item.possible}</td>
            <td>{item.default}</td>
            <td>{item.required}</td>
        </tr>
    )
}

export { TableProps, TableItem }
