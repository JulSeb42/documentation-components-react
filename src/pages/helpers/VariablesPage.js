// Packages
import React from "react"
import { Font, Variables, Grid } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { Table, Head, Body } from "../../components/Table"

// Data
import allColors from "../../data/allColors"
import allOverlays from "../../data/allOverlays"
import allShadows from "../../data/allShadows"
import allSpacers from "../../data/allSpacers"
import allFontFamilies from "../../data/allFontFamilies"
import allFontWeights from "../../data/allFontWeights"
import allFontSizes from "../../data/allFontSizes"
import allRadiuses from "../../data/allRadiuses"
import allContainers from "../../data/allContainers"
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
        <PageDemo title="Variables" category="helpers">
            {mapped.map((item, i) => (
                <Grid gap={Variables.Spacers.S} key={i}>
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

            <Grid gap={Variables.Spacers.S}>
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

            <Grid gap={Variables.Spacers.S}>
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
        </PageDemo>
    )
}

export default VariablesPage
