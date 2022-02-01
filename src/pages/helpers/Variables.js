// Packages
import React from "react"
import { Variables, Font } from "components-react-julseb"
import styled from "styled-components"

import allColors from "../../components/data/allColors"
import allOverlays from "../../components/data/allOverlays"
import allShadows from "../../components/data/allShadows"
import allMargins from "../../components/data/allMargins"
import allFontFamilies from "../../components/data/allFontFamilies"
import allFontWeights from "../../components/data/allFontWeights"
import allFontSizes from "../../components/data/allFontSizes"
import allRadiuses from "../../components/data/allRadiuses"
import allContainers from "../../components/data/allContainer"
import allTransitions from "../../components/data/allTransitions"
import allBreakpoints from "../../components/data/allBreakpoints"

const Container = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${Variables.Colors.Gray200};

    tr:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.Gray200};
    }

    tr td {
        width: calc(100% / 3);
        padding: ${Variables.Margins.XS};
        overflow-x: scroll;
        max-width: calc(800px / 4);

        &:not(:last-child) {
            border-right: 1px solid ${Variables.Colors.Gray200};
        }
    }
`

const Head = styled.thead`
    background-color: ${Variables.Colors.Primary500};
    color: ${Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Bold};

    tr td:not(:last-child) {
        border-color: ${Variables.Colors.White};
    }
`

const Body = styled.tbody``

function VariablesDemo() {
    return (
        <>
            <Font.H2>Colors variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allColors.map((color, i) => (
                        <tr key={i}>
                            <td>Variables.Colors.{color.name}</td>
                            <td>{color.css}</td>
                            <td>{color.rgb}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Overlays variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allOverlays.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Overlays.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Shadows variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allShadows.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Shadows.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Margins variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allMargins.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Margins.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Font families variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allFontFamilies.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.FontFamilies.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Font weights variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allFontWeights.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.FontWeights.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Font sizes variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allFontSizes.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.FontSizes.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Line height variable</Font.H2>

            <Container>
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
            </Container>

            <Font.H2>Radiuses variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allRadiuses.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Radiuses.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Container variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allContainers.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Container.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Transitions variables</Font.H2>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>CSS</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allTransitions.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Transitions.{item.name}</td>
                            <td>{item.css}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>

            <Font.H2>Breakpoints variables</Font.H2>

            <Font.P>Sadly, this is not possible to override.</Font.P>

            <Container>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>Value</td>
                    </tr>
                </Head>

                <Body>
                    {allBreakpoints.map((item, i) => (
                        <tr key={i}>
                            <td>Variables.Breakpoints.{item.name}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </Body>
            </Container>
        </>
    )
}

export default VariablesDemo
