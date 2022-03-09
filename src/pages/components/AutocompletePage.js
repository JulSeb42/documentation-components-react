// Packages
import React, { useState, useEffect} from "react"
import { Autocomplete } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const AutocompletePage = () => {
    // Input props, items, onMouseDown, onChange, value
    const props = [
        {
            name: "items",
            type: "Array",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onMouseDown",
            type: "Function",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onChange",
            type: "Function",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "value",
            type: "String",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "Input props",
            type: "-",
            example: "All the props from the Input component",
            default: "-",
            required: "-",
        },
    ]

    // List suggestions
    const [allCities, setAllCities] = useState([])
    const [location, setLocation] = useState("")

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/JulSeb42/js-utils/master/utils/allCities.json"
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

    return (
        <PageDemo
            title="Autocomplete"
            category="components"
            import="Autocomplete"
        >
            <DemoItem
                code={
                    // eslint-disable-next-line
                    '// List suggestions\nconst [allCities, setAllCities] = useState([])\nconst [location, setLocation] = useState("")\n\nuseEffect(() => {\n    fetch(\n        "https://raw.githubusercontent.com/JulSeb42/js-utils/master/utils/allCities.json"\n    )\n        .then((res) => res.json())\n        .then((res) =>\n            setAllCities(res.map((city) => `${city.name}, ${city.country}`))\n        )\n        .catch((err) => console.log(err))\n}, [])\n\nconst [filteredCities, setFilteredCities] = useState("")\n\nconst handleFilterLocation = (e) => {\n    setLocation(e.target.value)\n    setFilteredCities(e.target.value)\n}\n\nlet resultsCities = allCities.filter((city) => {\n    return city.toLowerCase().includes(filteredCities.toLowerCase())\n})\n\nconst handleClickSuggestion = (e) => {\n    setLocation(e.target.innerText)\n}\n\n<Autocomplete\n    label="Location"\n    id="location"\n    onChange={handleFilterLocation}\n    value={location}\n    items={resultsCities}\n    onMouseDown={handleClickSuggestion}\n/>'
                }
            >
                <Autocomplete
                    label="Location"
                    id="location"
                    onChange={handleFilterLocation}
                    value={location}
                    items={resultsCities}
                    onMouseDown={handleClickSuggestion}
                />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default AutocompletePage

