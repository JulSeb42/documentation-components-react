// Packages
import React from "react"
import { Font, Grid, Tag } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const TagPage = () => {
    const props = [
        {
            name: "label",
            type: "String",
            example: "Tag",
            default: "None",
            required: "Yes",
        },
        {
            name: "color",
            type: "String value or Variable",
            example: "primary, secondary, success, danger, warning, white",
            default: "primary",
            required: "No",
        },
        {
            name: "pill",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "select",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "justify",
            type: "String",
            example: "start, center, end",
            default: "None",
            required: "No, but use it when the tag is inside a grid",
        },
        {
            name: "type",
            type: "String",
            example: "radio",
            default: "checkbox (if select prop)",
            required: "No, only if you use the select prop",
        },
        {
            name: "id",
            type: "String",
            example: "tag",
            default: "None",
            required: "No, only if you use the select prop",
        },
        {
            name: "name",
            type: "String",
            example: "tag",
            default: "None",
            required: "No, only if you use the select prop",
        },
    ]

    return (
        <PageDemo title="Tag" category="components" import="Tag">
            <Font.H2>Selectable</Font.H2>

            <DemoItem
                subtitle="Rounded"
                code={
                    '<Tag color="primary" id="tag-primary-round" label="Tag" select />\n\n<Tag color="secondary" id="tag-secondary-round" label="Tag" select />\n\n<Tag color="success" id="tag-success-round" label="Tag" select />\n\n<Tag color="danger" id="tag-danger-round" label="Tag" select />\n\n<Tag color="warning" id="tag-warning-round" label="Tag" select />\n\n<Tag color="disabled" id="tag-primary-round" label="Tag" select disabled />'
                }
            >
                <Grid col={8}>
                    <Tag
                        color="primary"
                        id="tag-primary-round"
                        label="Tag"
                        justify="start"
                        select
                    />
                    <Tag
                        color="secondary"
                        id="tag-secondary-round"
                        label="Tag"
                        justify="start"
                        select
                    />
                    <Tag
                        color="success"
                        id="tag-success-round"
                        label="Tag"
                        justify="start"
                        select
                    />
                    <Tag
                        color="danger"
                        id="tag-danger-round"
                        label="Tag"
                        justify="start"
                        select
                    />
                    <Tag
                        color="warning"
                        id="tag-warning-round"
                        label="Tag"
                        justify="start"
                        select
                    />
                    <Tag
                        color="disabled"
                        id="tag-primary-round"
                        label="Tag"
                        justify="start"
                        select
                        disabled
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                subtitle="Pill"
                code={
                    '<Tag color="primary" id="tag-primary-pill" label="Tag" select pill />\n\n<Tag color="secondary" id="tag-secondary-pill" label="Tag" select pill />\n\n<Tag color="success" id="tag-success-pill" label="Tag" select pill />\n\n<Tag color="danger" id="tag-danger-pill" label="Tag" select pill />\n\n<Tag color="warning" id="tag-warning-pill" label="Tag" select pill />\n\n<Tag color="disabled" id="tag-primary-pill" label="Tag" select pill disabled />\n'
                }
            >
                <Grid col={8}>
                    <Tag
                        color="primary"
                        id="tag-primary-pill"
                        label="Tag"
                        justify="start"
                        select
                        pill
                    />
                    <Tag
                        color="secondary"
                        id="tag-secondary-pill"
                        label="Tag"
                        justify="start"
                        select
                        pill
                    />
                    <Tag
                        color="success"
                        id="tag-success-pill"
                        label="Tag"
                        justify="start"
                        select
                        pill
                    />
                    <Tag
                        color="danger"
                        id="tag-danger-pill"
                        label="Tag"
                        justify="start"
                        select
                        pill
                    />
                    <Tag
                        color="warning"
                        id="tag-warning-pill"
                        label="Tag"
                        justify="start"
                        select
                        pill
                    />
                    <Tag
                        color="disabled"
                        id="tag-primary-pill"
                        label="Tag"
                        justify="start"
                        select
                        pill
                        disabled
                    />
                </Grid>
            </DemoItem>

            <Font.H2>Not selectable</Font.H2>

            <DemoItem
                subtitle="Rounded"
                code={
                    '<Tag color="primary" id="tag-primary-round" label="Tag" />\n\n<Tag color="secondary" id="tag-secondary-round" label="Tag" />\n\n<Tag color="success" id="tag-success-round" label="Tag" />\n\n<Tag color="danger" id="tag-danger-round" label="Tag" />\n\n<Tag color="warning" id="tag-warning-round" label="Tag" />'
                }
            >
                <Grid col={8}>
                    <Tag
                        color="primary"
                        id="tag-primary-round"
                        label="Tag"
                        justify="start"
                    />
                    <Tag
                        color="secondary"
                        id="tag-secondary-round"
                        label="Tag"
                        justify="start"
                    />
                    <Tag
                        color="success"
                        id="tag-success-round"
                        label="Tag"
                        justify="start"
                    />
                    <Tag
                        color="danger"
                        id="tag-danger-round"
                        label="Tag"
                        justify="start"
                    />
                    <Tag
                        color="warning"
                        id="tag-warning-round"
                        label="Tag"
                        justify="start"
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                subtitle="Pill"
                code={
                    '<Tag color="primary" id="tag-primary-pill" label="Tag" pill />\n\n<Tag color="secondary" id="tag-secondary-pill" label="Tag" pill />\n\n<Tag color="success" id="tag-success-pill" label="Tag" pill />\n\n<Tag color="danger" id="tag-danger-pill" label="Tag" pill />\n\n<Tag color="warning" id="tag-warning-pill" label="Tag" pill />'
                }
            >
                <Grid col={8}>
                    <Tag
                        color="primary"
                        id="tag-primary-pill"
                        label="Tag"
                        justify="start"
                        pill
                    />
                    <Tag
                        color="secondary"
                        id="tag-secondary-pill"
                        label="Tag"
                        justify="start"
                        pill
                    />
                    <Tag
                        color="success"
                        id="tag-success-pill"
                        label="Tag"
                        justify="start"
                        pill
                    />
                    <Tag
                        color="danger"
                        id="tag-danger-pill"
                        label="Tag"
                        justify="start"
                        pill
                    />
                    <Tag
                        color="warning"
                        id="tag-warning-pill"
                        label="Tag"
                        justify="start"
                        pill
                    />
                </Grid>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default TagPage
