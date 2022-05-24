// Imports
import React, { useState } from "react"
import { Font, Input, Grid, Button } from "tsx-library-julseb"
import { unslugify, capitalize } from "js-utils-julseb"

import Page from "../components/Page"

import routes from "../routes/routes"

const ListPage = ({ slug }) => {
    const getSlug = slug.split("/")[1]

    const [search, setSearch] = useState("")
    const handleSearch = e => setSearch(e.target.value)

    const filtered = routes
        .filter(route => route.category !== "demo")
        .filter(route => route.path.split("/")[1] === getSlug)
        .filter(route => route.path !== slug)

    let results = filtered.filter(route =>
        route.path.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Page title={capitalize(getSlug)}>
            <Grid col={3}>
                <Input
                    icon="search"
                    placeholder="Search component"
                    id="search"
                    onChange={handleSearch}
                    value={search}
                />
            </Grid>

            <Grid col={3} gap="l">
                {results.length > 0 ? (
                    results.map((route, i) => (
                        <Button to={route.path} key={i} justify="stretch">
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

export default ListPage
