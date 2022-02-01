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
    <Autocomplete
        label="Location"
        id="location"
        onChange={handleFilterLocation}
        value={location}
        items={resultsCities}
        onMouseDown={handleClickAutocomplete}
    />
)