// Packages
import React from "react"
import { Font, CodeContainer } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { Table, Head, Body } from "../../components/Table"

const HelperClassesPage = () => {
    const items = [
        {
            name: "stop-scrolling",
            effect: "Disables scrolling on the page",
        },
        {
            name: "text-left",
            effect: "Aligns the text to the left",
        },
        {
            name: "text-center",
            effect: "Aligns the text to the center",
        },
        {
            name: "text-right",
            effect: "Aligns the text to the right",
        },
        {
            name: "hidden",
            effect: "Hides the component, accessibility friendly",
        },
        {
            name: "no-marg",
            effect: "Sets all margins to 0",
        },
        {
            name: "no-marg-top",
            effect: "Set margin top to 0",
        },
        {
            name: "no-marg-bottom",
            effect: "Sets margin bottom to 0",
        },
        {
            name: "no-marg-left",
            effect: "Sets margin left to 0",
        },
        {
            name: "no-marg-right",
            effect: "Sets margin right to 0",
        },
        {
            name: "no-padd",
            effect: "Sets all paddings to 0",
        },
        {
            name: "no-padd-top",
            effect: "Sets padding top to 0",
        },
        {
            name: "no-padd-bottom",
            effect: "Sets padding bottom to 0",
        },
        {
            name: "no-padd-left",
            effect: "Sets padding left to 0",
        },
        {
            name: "no-padd-right",
            effect: "Sets padding right to 0",
        },
        {
            name: "no-select",
            effect: "Disables user-select",
        },
        {
            name: "center",
            effect: "Creates a flexbox and centers content",
        },
    ]

    return (
        <PageDemo title="HelperClasses" category="helpers">
            <Font.P>
                Helper class names. Use them like any other classes:
            </Font.P>

            <CodeContainer language="js">
                {'<div className="center"></div>'}
            </CodeContainer>

            <Table>
                <Head>
                    <tr>
                        <td>Name</td>
                        <td>Effect</td>
                    </tr>
                </Head>

                <Body>
                    {items.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.effect}</td>
                        </tr>
                    ))}
                </Body>
            </Table>
        </PageDemo>
    )
}

export default HelperClassesPage
