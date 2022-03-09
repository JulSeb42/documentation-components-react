// Packages
import React from "react"
import { Font } from "components-react-julseb"

// Components
import { Table, Head, Body } from "./Table"

const TableProps = props => {
    return (
        <>
            <Font.H2>Props</Font.H2>

            {props.comment && <Font.P>{props.comment}</Font.P>}

            <Table>
                <Head>
                    <tr>
                        <td>Prop name</td>
                        <td>Prop type</td>
                        <td>Example value</td>
                        <td>Default</td>
                        <td>Required</td>
                    </tr>
                </Head>

                <Body>{props.children}</Body>
            </Table>
        </>
    )
}

const TableItem = ({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.example}</td>
            <td>{item.default}</td>
            <td>{item.required}</td>
        </tr>
    )
}

export { TableProps, TableItem }
