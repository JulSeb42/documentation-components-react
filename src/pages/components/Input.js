// Packages
import React, { useState, useEffect } from "react"
import {
    Input,
    Font,
    Variables,
    Autocomplete
} from "components-react-julseb"
import styled from "styled-components"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

// Data
import allCities from "../../components/data/cities.json"

const P = styled(Font.P)`
    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Margins.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
    }
`

const Td = styled.td`
    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};
        font-weight: ${Variables.FontWeights.Bold};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

const show = 'const [cities, setCities] = useState([])\nconst [location, setLocation] = useState("")\n\nuseEffect(() => {\n    setCities(allCities.map(city => `\${city.name}, \${city.country}`))\n}, [])\n\nconst [filteredCities, setFilteredCities] = useState("")\n\nconst handleFilterLocation = e => {\n    setLocation(e.target.value)\n    setFilteredCities(e.target.value)\n}\n\nlet resultsCities = cities.filter(city => {\n    return city.toLowerCase().includes(filteredCities.toLowerCase())\n})\n\nconst handleClickAutocomplete = e => {\n    setLocation(e.target.innerText)\n}\n\nreturn (\n    <Autocomplete\n        label="Location"\n        id="location"\n        onChange={handleFilterLocation}\n        value={location}\n        items={resultsCities}\n        onMouseDown={handleClickAutocomplete}\n    />\n)'

function InputDemo() {
    // Validation
    const [validation, setValidation] = useState("not-passed")
    const [inputValidate, setInputValidate] = useState("e")

    const handleValidation = e => {
        setInputValidate(e.target.value)

        if (e.target.value.length > 6) {
            setValidation("passed")
        } else {
            setValidation("not-passed")
        }
    }

    // Counter
    const [demoCounter, setDemoCounter] = useState("")
    const handleCounter = e => setDemoCounter(e.target.value)

    // Markdown
    const [markdown, setMarkdown] = useState("")

    // Autocomplete
    const [cities, setCities] = useState([])
    const [location, setLocation] = useState("")

    useEffect(() => {
        setCities(allCities.map(city => `${city.name}, ${city.country}`))
    }, [])

    const [filteredCities, setFilteredCities] = useState("")

    const handleFilterLocation = e => {
        setLocation(e.target.value)
        setFilteredCities(e.target.value)
    }

    let resultsCities = cities.filter(city => {
        return city.toLowerCase().includes(filteredCities.toLowerCase())
    })

    const handleClickAutocomplete = e => {
        setLocation(e.target.innerText)
    }

    return (
        <>
            <Font.H2>Text inputs</Font.H2>
            <Font.H4>Basic text input</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input id="input" />
                </DemoContent>

                <DemoCode>{'<Input id="input" />'}</DemoCode>
            </DemoContainer>
            <Font.H4>Input password</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input id="input-password" password />
                </DemoContent>

                <DemoCode>{'<Input id="input-password" password />'}</DemoCode>
            </DemoContainer>
            <Font.H4>Text input with label and helper</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input label="Label" helper="Helper" id="input-label" />
                </DemoContent>

                <DemoCode>
                    {'<Input label="Label" helper="Helper" id="input-label" />'}
                </DemoCode>
            </DemoContainer>
            <Font.H4>Text input with icon</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input icon="mail" id="input-icon" />
                </DemoContent>

                <DemoCode>{'<Input icon="mail" id="input-icon" />'}</DemoCode>
            </DemoContainer>
            <Font.H4>Text input disabled</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input id="input-disabled" disabled value="disabled" />
                </DemoContent>

                <DemoCode>
                    {'<Input id="input-disabled" disabled value="disabled" />'}
                </DemoCode>
            </DemoContainer>
            <Font.H4>Text input with inline validation</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input
                        label="Input with validation"
                        id="input-validation"
                        validationText="Text validation"
                        onChange={handleValidation}
                        validation={validation}
                        value={inputValidate}
                    />
                </DemoContent>

                <DemoCode>
                    {
                        'const [validation, setValidation] = useState("not-passed")\nconst [inputValidate, setInputValidate] = useState("e")\n\nconst handleValidation = (e) => {\n    setInputValidate(e.target.value)\n\n    if (e.target.value.length > 6) {\n        setValidation("passed")\n    } else {\n        setValidation("not-passed")\n    }\n}\n\nreturn (\n    <Input\n        label="Input with validation"\n        id="input-validation"\n        validationText="Text validation"\n        onChange={handleValidation}\n        validation={validation}\n        value={inputValidate}\n    />\n)'
                    }
                </DemoCode>
            </DemoContainer>
            <Font.H4>Text input with counter</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input
                        counter={30}
                        id="input-counter"
                        onChange={handleCounter}
                        value={demoCounter}
                    />
                </DemoContent>

                <DemoCode>
                    {
                        'const [demoCounter, setDemoCounter] = useState("")\nconst handleCounter = e => setDemoCounter(e.target.value)\n\n<Input\n    counter={30}\n    id="input-counter"\n    onChange={handleCounter}\n    value={demoCounter}\n/>'
                    }
                </DemoCode>
            </DemoContainer>
            <Font.H4>Textarea</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input type="textarea" label="Textarea" id="textarea" />
                </DemoContent>

                <DemoCode>
                    {'<Input type="textarea" label="Textarea" id="textarea" />'}
                </DemoCode>
            </DemoContainer>
            <Font.H4>Select</Font.H4>
            <DemoContainer>
                <DemoContent>
                    <Input type="select" label="Select" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Input>
                </DemoContent>

                <DemoCode>
                    {
                        '<Input type="select" label="Select" id="select">\n    <option>1</option>\n    <option>2</option>\n    <option>3</option>\n</Input>'
                    }
                </DemoCode>
            </DemoContainer>
            <Font.H4>Markdown</Font.H4>
            <P>
                Here we are using <code>@uiw/react-md-editor</code> as markdown
                editor. Check the npm package{" "}
                <a
                    href="https://www.npmjs.com/package/@uiw/react-md-editor"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    here
                </a>
                .
            </P>
            <DemoContainer>
                <DemoContent>
                    <Input
                        type="markdown"
                        label="Markdown"
                        id="markdown"
                        onChange={setMarkdown}
                        value={markdown}
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Input\n    type="markdown"\n    label="Markdown"\n    id="markdown"\n    onChange={setMarkdown}\n    value={markdown}\n/>'
                    }
                </DemoCode>
            </DemoContainer>
            <TableProps>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>email</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>String or function</td>
                    <td>julien@email.com</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onChange</td>
                    <td>Function</td>
                    <td>handleEmail</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>

                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>number</td>
                    <td>text</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>Email</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>helper</td>
                    <td>String</td>
                    <td>Your password must be at least 6 characters long</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>validation</td>
                    <td>function</td>
                    <td>See validation example</td>
                    <td>None</td>
                    <td>Only if you want validation</td>
                </tr>
                <tr>
                    <td>validationText</td>
                    <td>String</td>
                    <td>See validation example</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>mail</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No, but if you use it do not set a type</td>
                </tr>
                <tr>
                    <td>counter</td>
                    <td>Number</td>
                    <td>140</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>preview (for markdown type)</td>
                    <td>string</td>
                    <td>live</td>
                    <td>edit</td>
                    <td>No</td>
                </tr>
            </TableProps>
            <Font.H2>Autocomplete</Font.H2>
            <DemoContainer>
                <DemoContent>
                    <Autocomplete
                        label="Location"
                        id="location"
                        onChange={handleFilterLocation}
                        value={location}
                        items={resultsCities}
                        onMouseDown={handleClickAutocomplete}
                    />
                </DemoContent>

                <DemoCode>
                    {
                        show
                    }
                </DemoCode>
            </DemoContainer>
            <TableProps>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>city</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onChange</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>String or function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>items</td>
                    <td>Array</td>
                    <Td>
                        See example{" "}
                        <a
                            href="https://raw.githubusercontent.com/JulSeb42/react-library/master/src/components/demo/cities.json"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            here
                        </a>
                    </Td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onMouseDown</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
            </TableProps>
        </>
    )
}

export default InputDemo
