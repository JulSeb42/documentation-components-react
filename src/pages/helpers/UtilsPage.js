// Packages
import React, { useState, useEffect } from "react"
import {
    Font,
    CodeContainer,
    MarkdownContainer,
} from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { Table, Head, Body } from "../../components/Table"

const UtilsPage = () => {
    const [randomAvatar, setRandomAvatar] = useState("")

    useEffect(() => {
        import("../demos/textGetRandomAvatar.md")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setRandomAvatar(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    const items = [
        {
            function: "allCities",
            effect: "JSON file with all cities and countries in the world",
            example: "-",
            result: "-",
        },
        {
            function: "calculateTotalSum([arr])",
            effect: "Calculates the total sum of an array of numbers",
            example: "calculateTotalSum([3, 30, 42, 2])",
            result: "77",
        },
        {
            function: "capitalize(str)",
            effect: "Capitalizes the first letter of a string",
            example: 'capitalize("hello")',
            result: "Hello",
        },
        {
            function: "convertDate(date)",
            effect: "Converts a date in the format yyyy-mm-dd to dd fullMonth yyyy",
            example: 'convertDate("2022-01-28")',
            result: "28 January 2022",
        },
        {
            function: "convertDateShort(date)",
            effect: "Converts a date in the format yyyy-mm-dd to dd shortMonth yyyy",
            example: 'convertDateShort("2022-01-28")',
            result: "28 Jan 2022",
        },
        {
            function: "convertToEmail(str, domain)",
            effect: 'Converts a string to an email address. The domain is not mandatory (default "@email.com")',
            example: 'convertToEmail("Julien Sebag", "me.com")',
            result: "julien.sebag@me.com",
        },
        {
            function: "convertYoutube(url)",
            effect: "Converts a YouTube url to an embed link for iframes",
            example:
                'convertYoutube("https://www.youtube.com/watch?v=2EaxYi31ips")',
            result: "https://www.youtube.com/embed/2EaxYi31ips",
        },
        {
            function: "getFirstName(str)",
            effect: "Returns the first word of a string",
            example: 'getFirstName("Julien Sebag")',
            result: "Julien",
        },
        {
            function: "getLastName(str)",
            effect: "Returns the last word of a string",
            example: 'getLastName("Julien Sebag")',
            result: "Sebag",
        },
        {
            function: "getRandom([arr])",
            effect: "Returns a random value from an array",
            example: 'getRandom(["Hello", "world", "how", "are", "you"])',
            result: "how",
        },
        {
            function: "getRandomAvatar(gender)",
            effect: randomAvatar,
            example: 'getRandomAvatar("male")',
            result: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png",
            markdown: true,
        },
        {
            function: "getRandomCity(country)",
            effect: "Returns a random city from a specified country",
            example: 'getRandomCity("France")',
            result: "Nîmes, France",
        },
        {
            function: "getRandomDate(minYear, maxYear)",
            effect: "Returns a random date",
            example: "getRandomDate(1970, 2022)",
            result: "1989-03-12",
        },
        {
            function: "getRandomLocation()",
            effect: "Returns a random location from the allCities JSON file",
            example: "getRandomLocation()",
            result: "Ailsworth, United Kingdom",
        },
        {
            function: "getRandomNumber(min, max)",
            effect: "Returns a random number in a range",
            example: "getRandomNumber(1, 20)",
            result: "12",
        },
        {
            function: "getRandomString(length)",
            effect: "Returns a random string of letters and numbers",
            example: "getRandomString(20)",
            result: "ad98W9OYNHbBZt6xdz5T",
        },
        {
            function: "getRandomTime(minHour, maxHour)",
            effect: "Returns a random time",
            example: "getRandomTime(0, 23)",
            result: "10:24",
        },
        {
            function: "getTimeNow()",
            effect: "Returns the time",
            example: "getTimeNow()",
            result: "14:42",
        },
        {
            function: "getToday()",
            effect: "Returns today's date",
            example: "getToday()",
            result: "2022-03-07",
        },
        {
            function: "passwordRegex",
            effect: "Tests if a password contains at least 6 characters, one number, one uppercase letter and one lowercase letter",
            example: 'passwordRegex.test("Password42")',
            result: "true",
        },
        {
            function: "emailRegex",
            effect: "Tests if an email address is valid",
            example: 'emailRegex.test("a@b.c")',
            result: "false",
        },
        {
            function: "scrollToTop",
            effect: "Function to scroll to the top of the page on click",
            example: "-",
            result: "-",
        },
        {
            function: "slugify(str)",
            effect: "Replaces accents, spaces, uppercase letters, etc., in a string to convert it to a url friendly string",
            example: 'slugify("Hello world how are you?")',
            result: "hello-world-how-are-you",
        },
        {
            function: "unslugify(str)",
            effect: "Replaces dashes and underscores to a space, and capitalize the first letter of a string",
            example: 'unslugify("hello-world-how-are-you")',
            result: "Hello world how are you",
        },
    ]

    const options = {
        wrapper: Font.P,

        overrides: {
            p: {
                component: Font.P,
            },
        },
    }

    return (
        <PageDemo title="Utils" category="helpers">
            <Font.P>
                To be able to use these functions in vanilla JS (or other)
                projects, this a package is to install separately from the
                components library:
            </Font.P>

            <CodeContainer language="shell">
                {"npm i js-utils-julseb"}
            </CodeContainer>

            <Font.P>
                Find the full package on npm:{" "}
                <a
                    href="https://www.npmjs.com/package/js-utils-julseb"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    https://www.npmjs.com/package/js-utils-julseb
                </a>
                .
            </Font.P>

            <Table col={4}>
                <Head>
                    <tr>
                        <td>Function</td>
                        <td>Effect</td>
                        <td>Example</td>
                        <td>Result</td>
                    </tr>
                </Head>

                <Body>
                    {items.map((item, i) => (
                        <tr key={i}>
                            <td>{item.function}</td>
                            <td>
                                {item.markdown ? (
                                    <MarkdownContainer options={options}>
                                        {item.effect}
                                    </MarkdownContainer>
                                ) : (
                                    item.effect
                                )}
                            </td>
                            <td>{item.example}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </Body>
            </Table>
        </PageDemo>
    )
}

export default UtilsPage
