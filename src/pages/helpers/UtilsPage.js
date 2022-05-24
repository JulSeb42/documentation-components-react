// Imports
import React from "react"
import { Font, CodeContainer, Avatar, Button } from "tsx-library-julseb"
import {
    calculateTotalSum,
    capitalize,
    convertDate,
    convertDateShort,
    convertToEmail,
    convertPrice,
    convertYoutube,
    detectLanguage,
    getFirstName,
    getLastName,
    getRandom,
    getRandomAvatar,
    getRandomCity,
    getRandomDate,
    getRandomLocation,
    getRandomNumber,
    getRandomString,
    getRandomTime,
    getTimeNow,
    getToday,
    passwordRegex,
    emailRegex,
    scrollToTop,
    slugify,
    stringifyPx,
    unslugify,
} from "js-utils-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import { Table, Head, Body } from "../../components/Table"

const UtilsPage = () => {
    const items = [
        {
            function: "allCities",
            effect: "JSON file with all cities and countries in the world",
            example: "-",
            result: "-",
        },
        {
            function: "calculateTotalSum(array)",
            effect: "Calculates the total sum of an array of numbers",
            example: "calculateTotalSum([3, 30, 42, 2])",
            result: calculateTotalSum([3, 30, 42, 2]),
        },
        {
            function: "capitalize(string)",
            effect: "Capitalizes the first letter of a string",
            example: 'capitalize("hello")',
            result: capitalize("hello"),
        },
        {
            function: "convertDate(date)",
            effect: "Converts a date in the format yyyy-mm-dd to dd fullMonth yyyy",
            example: 'convertDate("2022-01-28")',
            result: convertDate("2022-01-28"),
        },
        {
            function: "convertDateShort(date)",
            effect: "Converts a date in the format yyyy-mm-dd to dd shortMonth yyyy",
            example: 'convertDateShort("2022-01-28")',
            result: convertDateShort("2022-01-28"),
        },
        {
            function: "convertToEmail(full name, domain)",
            effect: 'Converts a string to an email address. The domain is not mandatory (default "@email.com")',
            example: 'convertToEmail("Julien Sebag", "me.com")',
            result: convertToEmail("Julien Sebag", "me.com"),
        },
        {
            function: "convertPrice(amount, currency)",
            effect: "Converts an amount to a formatted price",
            example: 'convertPrice(1000, "EUR")',
            result: convertPrice(1000, "EUR"),
        },
        {
            function: "convertYoutube(url)",
            effect: "Converts a YouTube url to an embed link for iframes",
            example:
                'convertYoutube("https://www.youtube.com/watch?v=2EaxYi31ips")',
            result: convertYoutube(
                "https://www.youtube.com/watch?v=2EaxYi31ips"
            ),
        },
        {
            function: "detectLanguage()",
            effect: (
                <Font.P>
                    Search for <code>lang</code> or <code>language</code> in
                    localStorage, and if it returns null both times detects the
                    browser language
                </Font.P>
            ),
            example: "detectLanguage()",
            result: detectLanguage(),
        },
        {
            function: "getFirstName(string)",
            effect: "Returns the first word of a string",
            example: 'getFirstName("Julien Sebag")	',
            result: getFirstName("Julien Sebag"),
        },
        {
            function: "getLastName(string)",
            effect: "Returns the last word of a string",
            example: 'getLastName("Julien Sebag")',
            result: getLastName("Julien Sebag"),
        },
        {
            function: "getRandom(array)",
            effect: "Returns a random value from an array",
            example: 'getRandom(["Hello", "world", "how", "are", "you"])',
            result: getRandom(["Hello", "world", "how", "are", "you"]),
        },
        {
            function: "getRandomAvatar(gender)",
            effect: (
                <Font.P>
                    Returns a random avatar from{" "}
                    <a
                        href="https://github.com/Ashwinvalento/cartoon-avatar"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        cartoon-avatar library
                    </a>
                    . Can be <code>male</code>, <code>female </code>, or{" "}
                    <code>other</code>
                    for random gender
                </Font.P>
            ),
            example: 'getRandomAvatar("male")',
            result: <Avatar src={getRandomAvatar("male")} alt="Avatar" />,
        },
        {
            function: "getRandomCity(country)",
            effect: "Returns a random city from a specified country",
            example: 'getRandomCity("France")',
            result: getRandomCity("France"),
        },
        {
            function: "getRandomDate(minYear, maxYear)",
            effect: "Returns a random date",
            example: "getRandomDate(1970, 2022)",
            result: getRandomDate(1970, 2022),
        },
        {
            function: "getRandomLocation()",
            effect: "Returns a random location from the allCities JSON file",
            example: "getRandomLocation()",
            result: getRandomLocation(),
        },
        {
            function: "getRandomNumber(min, max)",
            effect: "Returns a random number in a range",
            example: "getRandomNumber(1, 20)",
            result: getRandomNumber(1, 20),
        },
        {
            function: "getRandomString(length)",
            effect: "Returns a random string of letters and numbers",
            example: "getRandomString(20)",
            result: getRandomString(20),
        },
        {
            function: "getRandomTime(minHour, maxHour)",
            effect: "Returns a random time",
            example: "getRandomTime(0, 23)",
            result: getRandomTime(0, 23),
        },
        {
            function: "getTimeNow()",
            effect: "Returns the time",
            example: "getTimeNow()",
            result: getTimeNow(),
        },
        {
            function: "getToday()",
            effect: "Returns today's date",
            example: "getToday()",
            result: getToday(),
        },
        {
            function: "passwordRegex",
            effect: "Tests if a password contains at least 6 characters, one number, one uppercase letter and one lowercase letter",
            example: 'passwordRegex.test("Password42")',
            result: passwordRegex.test("Password42").toString(),
        },
        {
            function: "emailRegex",
            effect: "Tests if an email address is valid	",
            example: 'emailRegex.test("a@b.c")',
            result: emailRegex.test("a@b.c").toString(),
        },
        {
            function: "scrollToTop",
            effect: "Function to scroll to the top of the page on click",
            example: "<Button onClick={scrollToTop}>Scroll</Button>",
            result: <Button onClick={scrollToTop}>Scroll</Button>,
        },
        {
            function: "stringifyPx(string or number)",
            effect: "Returns a value in pixels if you enter a number",
            example: "stringifyPx(80)",
            result: stringifyPx(80),
        },
        {
            function: "slugify(string)",
            effect: "Replaces accents, spaces, uppercase letters, etc., in a string to convert it to a url friendly string",
            example: 'slugify("Hello world how are you?")',
            result: slugify("Hello world how are you?"),
        },
        {
            function: "unslugify(string)",
            effect: "Replaces dashes and underscores to a space, and capitalize the first letter of a string",
            example: 'unslugify("hello-world-how-are_you")',
            result: unslugify("hello-world-how-are_you"),
        },
    ]

    return (
        <PageComponent title="Utils" back="/helpers">
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

            <Table>
                <Head>
                    <tr>
                        <td>Function</td>
                        <td>Effect</td>
                        <td>Example</td>
                        <td>Result</td>
                    </tr>
                </Head>

                <Body>
                    {items.map(item => (
                        <tr key={uuid()}>
                            <td>{item.function}</td>
                            <td>{item.effect}</td>
                            <td>{item.example}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </Body>
            </Table>
        </PageComponent>
    )
}

export default UtilsPage
