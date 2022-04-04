// Packages
import React, { useState } from "react"
import { Font, Grid, Button, Input } from "components-react-julseb"
import { unslugify } from "js-utils-julseb"

// Components
import Page from "../components/Page"

// Routes
import routes from "../routes/routes"

const Helpers = () => {
    // Search components
    const [search, setSearch] = useState("")
    const handleSearch = e => setSearch(e.target.value)

    let results = routes
        .filter(route => route.category === "helpers")
        .filter(route => route.path.split("/")[2].includes(search))
    
    return (
        <Page title="Helpers">
            <Font.H1>Helpers</Font.H1>

            <Grid col={3}>
                <Input
                    placeholder="Search component"
                    icon="search"
                    onChange={handleSearch}
                    value={search}
                />
            </Grid>

            <Grid col={3}>
                {results.length > 0 ? (
                    results.map((route, i) => (
                        <Button to={route.path} key={i}>
                            {unslugify(route.path.split("/")[2])}
                        </Button>
                    ))
                ) : (
                    <Font.P>No result.</Font.P>
                )}
            </Grid>
        </Page>
    )
}

export default Helpers
