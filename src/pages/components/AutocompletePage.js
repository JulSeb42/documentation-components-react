// Imports
import React, { useState, useEffect } from "react"
import { Autocomplete } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const AutocompletePage = () => {
    // List
    const [allCities, setAllCities] = useState([])
    const [location, setLocation] = useState("")

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/JulSeb42/js-utils/master/src/allCities.json"
        )
            .then(res => res.json())
            .then(res =>
                setAllCities(res.map(city => `${city.name}, ${city.country}`))
            )
            .catch(err => console.log(err))
    }, [])

    const [filteredCities, setFilteredCities] = useState("")

    const handleFilterLocation = e => {
        setLocation(e.target.value)
        setFilteredCities(e.target.value)
    }

    let resultsCities = allCities.filter(city => {
        return city.toLowerCase().includes(filteredCities.toLowerCase())
    })

    const handleClickSuggestion = e => {
        setLocation(e.target.innerText)
    }

    const demo = [
        {
            // eslint-disable-next-line
            code: 'const [allCities, setAllCities] = useState([])\nconst [location, setLocation] = useState("")\n\nuseEffect(() => {\n    fetch(\n        "https://raw.githubusercontent.com/JulSeb42/js-utils/master/src/allCities.json"\n    )\n        .then(res => res.json())\n        .then(res =>\n            setAllCities(\n                res.map(city => `${city.name}, ${city.country}`)\n            )\n        )\n        .catch(err => console.log(err))\n}, [])\n\nconst [filteredCities, setFilteredCities] = useState("")\n\nconst handleFilterLocation = e => {\n    setLocation(e.target.value)\n    setFilteredCities(e.target.value)\n}\n\nlet resultsCities = allCities.filter(city => {\n    return city.toLowerCase().includes(filteredCities.toLowerCase())\n})\n\nconst handleClickSuggestion = e => {\n    setLocation(e.target.innerText)\n}\n\n<Autocomplete\n    label="Location"\n    id="location"\n    onChange={handleFilterLocation}\n    value={location}\n    items={resultsCities}\n    onMouseDown={handleClickSuggestion}\n/>',
            demo: (
                <Autocomplete
                    label="Location"
                    id="location"
                    onChange={handleFilterLocation}
                    value={location}
                    items={resultsCities}
                    onMouseDown={handleClickSuggestion}
                />
            ),
        },
    ]

    const props = [
        {
            name: "id",
            type: "String",
            example: "city",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onMouseDown",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onChange",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "items",
            type: "Array",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "value",
            type: "Any",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "disabled",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "icon",
            type: "String",
            example: "user",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "label",
            type: "String",
            example: "City",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helper",
            type: "String",
            example: "Search your city",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helperBottom",
            type: "String",
            example: "Search your city",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Autocomplete"
            back="/components"
            component="Autocomplete"
        >
            {demo.map(demo => (
                <DemoItem
                    title={demo.title}
                    code={demo.code}
                    subtitle={demo.subtitle}
                    helper={demo.helper}
                    key={uuid()}
                >
                    {demo.demo}
                </DemoItem>
            ))}

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default AutocompletePage
