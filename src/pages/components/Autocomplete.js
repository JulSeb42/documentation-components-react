// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Autocomplete, Font, Variables } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

// Data
import allCities from "../../components/data/cities.json"

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

function AutocompleteDemo(props) {
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

    // Test
    const [post, setPost] = useState("")

    useEffect(() => {
        import("./input-md.md")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    return (
        <>
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

                <DemoCode>{post}</DemoCode>
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

export default AutocompleteDemo