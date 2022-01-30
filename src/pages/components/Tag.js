// Packages
import React from "react"
import { Tag, Font, Grid } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function TagDemo() {
    return (
        <>
            <Font.H2>Selectable tag</Font.H2>

            <Font.H4>Rounded</Font.H4>

            <DemoContainer>
                <DemoContent>
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
                </DemoContent>

                <DemoCode>
                    {
                        '<Tag color="primary" id="tag-primary-round" label="Tag" select />\n<Tag color="secondary" id="tag-secondary-round" label="Tag" select />\n<Tag color="success" id="tag-success-round" label="Tag" select />\n<Tag color="danger" id="tag-danger-round" label="Tag" select />\n<Tag color="warning" id="tag-warning-round" label="Tag" select />\n<Tag color="disabled" id="tag-primary-round" label="Tag" select disabled />'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H4>Pill</Font.H4>

            <DemoContainer>
                <DemoContent>
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
                </DemoContent>

                <DemoCode>
                    {
                        '<Tag color="primary" id="tag-primary-pill" label="Tag" select pill />\n<Tag color="secondary" id="tag-secondary-pill" label="Tag" select pill />\n<Tag color="success" id="tag-success-pill" label="Tag" select pill />\n<Tag color="danger" id="tag-danger-pill" label="Tag" select pill />\n<Tag color="warning" id="tag-warning-pill" label="Tag" select pill />\n<Tag color="disabled" id="tag-primary-pill" label="Tag" select pill disabled />'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Not selectable tag</Font.H2>

            <Font.H4>Rounded</Font.H4>

            <DemoContainer>
                <DemoContent>
                    <Grid col={8}>
                        <Tag color="primary" label="Tag" justify="start" />
                        <Tag color="secondary" label="Tag" justify="start" />
                        <Tag color="success" label="Tag" justify="start" />
                        <Tag color="danger" label="Tag" justify="start" />
                        <Tag color="warning" label="Tag" justify="start" />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Tag color="primary" label="Tag" />\n<Tag color="secondary" label="Tag" />\n<Tag color="success" label="Tag" />\n<Tag color="danger" label="Tag" />\n<Tag color="warning" label="Tag" />'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H4>Pill</Font.H4>

            <DemoContainer>
                <DemoContent>
                    <Grid col={8}>
                        <Tag color="primary" label="Tag" justify="start" pill />
                        <Tag
                            color="secondary"
                            label="Tag"
                            justify="start"
                            pill
                        />
                        <Tag color="success" label="Tag" justify="start" pill />
                        <Tag color="danger" label="Tag" justify="start" pill />
                        <Tag color="warning" label="Tag" justify="start" pill />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<Tag color="primary" label="Tag" pill />\n<Tag color="secondary" label="Tag" pill />\n<Tag color="success" label="Tag" pill />\n<Tag color="danger" label="Tag" pill />\n<Tag color="warning" label="Tag" pill />'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>Tag</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>String value or variable</td>
                    <td>primary, secondary, success, danger, warning, white</td>
                    <td>primary</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>tag-1</td>
                    <td>None</td>
                    <td>Only for selectable ones</td>
                </tr>
                <tr>
                    <td>select</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>Only for selectable ones</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>String</td>
                    <td>tags</td>
                    <td>None</td>
                    <td>Only for selectable ones</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>checkbox or radio</td>
                    <td>checkbox</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>pill</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default TagDemo
