// Imports
import React from "react"
import { Font, Grid } from "tsx-library-julseb"

import PageComponent from "../../components/PageComponent"
import { Table, Head, Body } from "../../components/Table"

import allColors from "../../data/allColors"
import allContainers from "../../data/allContainers"
import allFontFamilies from "../../data/allFontFamilies"
import allFontSizes from "../../data/allFontSizes"
import allFontWeights from "../../data/allFontWeights"
import allOverlays from "../../data/allOverlays"
import allRadiuses from "../../data/allRadiuses"
import allShadows from "../../data/allShadows"
import allSpacers from "../../data/allSpacers"
import allTransitions from "../../data/allTransitions"

const VariablesPage = () => {
    const mapped = [
        {
            title: "Colors",
            items: allColors,
        },
        {
            title: "Overlays",
            items: allOverlays,
        },
        {
            title: "Shadows",
            items: allShadows,
        },
        {
            title: "Spacers",
            items: allSpacers,
        },
        {
            title: "FontFamilies",
            items: allFontFamilies,
        },
        {
            title: "FontWeights",
            items: allFontWeights,
        },
        {
            title: "FontSizes",
            items: allFontSizes,
        },
        {
            title: "Radiuses",
            items: allRadiuses,
        },
        {
            title: "Container",
            items: allContainers,
        },
        {
            title: "Transitions",
            items: allTransitions,
        },
    ]

    return (
        <PageComponent title="Variables" back="/helpers">
            {mapped.map((item, i) => (
                <Grid gap="s" key={i}>
                    <Font.H2>{item.title}</Font.H2>

                    <Table>
                        <Head>
                            <tr>
                                <td>Name</td>
                                <td>CSS</td>
                                <td>Value</td>
                            </tr>
                        </Head>

                        <Body>
                            {item.items.map((sub, j) => (
                                <tr key={j}>
                                    <td>
                                        Variables.{item.title}.{sub.name}
                                    </td>
                                    <td>{sub.css}</td>
                                    <td>
                                        {item.items === allColors
                                            ? sub.hex
                                            : sub.value}
                                    </td>
                                </tr>
                            ))}
                        </Body>
                    </Table>
                </Grid>
            ))}

            <Grid gap="s">
                <Font.H2>Line height</Font.H2>

                <Table>
                    <Head>
                        <tr>
                            <td>Name</td>
                            <td>CSS</td>
                            <td>Value</td>
                        </tr>
                    </Head>

                    <Body>
                        <tr>
                            <td>Variables.LineHeight</td>
                            <td>var(--line-height)</td>
                            <td>1.5</td>
                        </tr>
                    </Body>
                </Table>
            </Grid>

            <Grid gap="s">
                <Font.H2>Breakpoints</Font.H2>

                <Font.P>Sadly, this is not possible to override.</Font.P>

                <Table>
                    <Head>
                        <tr>
                            <td>Name</td>
                            <td>Value</td>
                        </tr>
                    </Head>

                    <Body>
                        <tr>
                            <td>Variables.Breakpoints.Mobile</td>
                            <td>(max-width: 600px)</td>
                        </tr>

                        <tr>
                            <td>Variables.Breakpoints.Tablet</td>
                            <td>(max-width: 1024px)</td>
                        </tr>
                    </Body>
                </Table>
            </Grid>
        </PageComponent>
    )
}

export default VariablesPage
