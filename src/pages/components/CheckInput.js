// Packages
import React from "react"
import { CheckInput, Font, Grid, Variables } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function CheckInputDemo() {
    return (
        <>
            <Font.H2>Checkbox</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.XXS}>
                        <CheckInput
                            label="Checkbox"
                            id="checkbox-1"
                            type="checkbox"
                            justify="start"
                            name="checkbox"
                        />

                        <CheckInput
                            label="Checkbox"
                            id="checkbox-2"
                            type="checkbox"
                            defaultChecked={true}
                            justify="start"
                            name="checkbox"
                        />

                        <CheckInput
                            label="Checkbox"
                            id="checkbox-1"
                            type="checkbox"
                            disabled
                            justify="start"
                            name="checkbox-disabled"
                        />

                        <CheckInput
                            label="Checkbox"
                            id="checkbox-2"
                            type="checkbox"
                            defaultChecked={true}
                            disabled
                            justify="start"
                            name="checkbox-disabled"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<CheckInput\n    label="Checkbox"\n    id="checkbox-1"\n    type="checkbox"\n    justify="start"\n    name="checkbox"\n/>\n\n<CheckInput\n    label="Checkbox"\n    id="checkbox-2"\n    type="checkbox"\n    defaultChecked={true}\n    justify="start"\n    name="checkbox"\n/>\n\n<CheckInput\n    label="Checkbox"\n    id="checkbox-1"\n    type="checkbox"\n    disabled\n    justify="start"\n    name="checkbox-disabled"\n/>\n\n<CheckInput\n    label="Checkbox"\n    id="checkbox-2"\n    type="checkbox"\n    defaultChecked={true}\n    disabled\n    justify="start"\n    name="checkbox-disabled"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Radio</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.XXS}>
                        <CheckInput
                            label="Radio"
                            id="radio-1"
                            type="radio"
                            justify="start"
                            name="radio"
                        />

                        <CheckInput
                            label="Radio"
                            id="radio-2"
                            type="radio"
                            defaultChecked={true}
                            justify="start"
                            name="radio"
                        />

                        <CheckInput
                            label="Radio"
                            id="radio-3"
                            type="radio"
                            disabled
                            justify="start"
                            name="radio-disabled"
                        />

                        <CheckInput
                            label="Radio"
                            id="radio-4"
                            type="radio"
                            defaultChecked={true}
                            disabled
                            justify="start"
                            name="radio-disabled"
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<CheckInput\n    label="Radio"\n    id="radio-1"\n    type="radio"\n    justify="start"\n    name="radio"\n/>\n\n<CheckInput\n    label="Radio"\n    id="radio-2"\n    type="radio"\n    defaultChecked={true}\n    justify="start"\n    name="radio"\n/>\n\n<CheckInput\n    label="Radio"\n    id="radio-3"\n    type="radio"\n    disabled\n    justify="start"\n    name="radio-disabled"\n/>\n\n<CheckInput\n    label="Radio"\n    id="radio-4"\n    type="radio"\n    defaultChecked={true}\n    disabled\n    justify="start"\n    name="radio-disabled"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Toggle</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Grid gap={Variables.Margins.XXS}>
                        <CheckInput
                            label="Toggle"
                            id="toggle-1"
                            type="checkbox"
                            justify="start"
                            name="toggle"
                            toggle
                        />

                        <CheckInput
                            label="Toggle"
                            id="toggle-2"
                            type="checkbox"
                            defaultChecked={true}
                            justify="start"
                            name="toggle"
                            toggle
                        />

                        <CheckInput
                            label="Toggle"
                            id="toggle-3"
                            type="checkbox"
                            disabled
                            justify="start"
                            name="toggle-disabled"
                            toggle
                        />

                        <CheckInput
                            label="Toggle"
                            id="toggle-4"
                            type="checkbox"
                            defaultChecked={true}
                            disabled
                            justify="start"
                            name="toggle-disabled"
                            toggle
                        />
                    </Grid>
                </DemoContent>

                <DemoCode>
                    {
                        '<CheckInput\n    label="Toggle"\n    id="toggle-1"\n    type="checkbox"\n    justify="start"\n    name="toggle"\n    toggle\n/>\n\n<CheckInput\n    label="Toggle"\n    id="toggle-2"\n    type="checkbox"\n    defaultChecked={true}\n    justify="start"\n    name="toggle"\n    toggle\n/>\n\n<CheckInput\n    label="Toggle"\n    id="toggle-3"\n    type="checkbox"\n    disabled\n    justify="start"\n    name="toggle-disabled"\n    toggle\n/>\n\n<CheckInput\n    label="Toggle"\n    id="toggle-4"\n    type="checkbox"\n    defaultChecked={true}\n    disabled\n    justify="start"\n    name="toggle-disabled"\n    toggle\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>checkbox-1</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>String</td>
                    <td>yes-no</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>checkbox or radio</td>
                    <td>checkbox</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>defaultChecked</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>no</td>
                </tr>
                <tr>
                    <td>justify</td>
                    <td>String</td>
                    <td>start</td>
                    <td>None</td>
                    <td>Only if the input is inside a grid</td>
                </tr>
                <tr>
                    <td>toggle</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default CheckInputDemo
