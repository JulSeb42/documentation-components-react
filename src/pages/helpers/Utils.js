// Packages
import React from "react"
import {
    Variables,
    getToday,
    getFirstName,
    convertDate,
    convertDateShort,
    getTimeNow,
    slugify,
    getRandom,
    getRandomNumber,
    getRandomString,
    convertYoutube,
    capitalize,
} from "components-react-julseb"
import styled from "styled-components"

const Container = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${Variables.Colors.Gray200};

    tr:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.Gray200};
    }

    tr td {
        width: calc(100% / 4);
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

const utils = [
    {
        function: "capitalize(str)",
        effect: "Capitalize the first letter of a string",
        example: 'capitalize("hello world")',
        result: capitalize("hello world"),
    },
    {
        function: "getToday()",
        effect: "Returns today's date",
        example: "getToday()",
        result: getToday(),
    },
    {
        function: "convertDate(str)",
        effect: "Convert a date to format Day FullMonth Year",
        example: 'convertDate("2022-02-01")',
        result: convertDate("2022-02-01"),
    },
    {
        function: "convertDateShort(str)",
        effect: "Convert a date to format Day ShortMonth Year",
        example: 'convertDateShort("2022-02-01")',
        result: convertDateShort("2022-02-01"),
    },
    {
        function: "getTimeNow()",
        effect: "Return the time",
        example: "getTimeNow()",
        result: getTimeNow(),
    },
    {
        function: "getFirstName(str)",
        effect: "Returns the first name of a full name",
        example: 'getFirstName("Julien Sebag")',
        result: getFirstName("Julien Sebag"),
    },
    {
        function: "slugify(str)",
        effect: "Converts a string to a slug",
        example: 'slugify("Hello World! é")',
        result: slugify("Hello World! é"),
    },
    {
        function: "getRandom(arr)",
        effect: "Return a random value from an array",
        example: "getRandom([1, 2, 3])",
        result: getRandom([1, 2, 3]),
    },
    {
        function: "getRandomNumber(max)",
        effect: "Return a random number between 0 and the specified max",
        example: "getRandomNumber(500)",
        result: getRandomNumber(500),
    },
    {
        function: "getRandomString(length)",
        effect: "Return a random string of a specified length",
        example: "getRandomString(10)",
        result: getRandomString(10),
    },
    {
        function: "scrollToTop()",
        effect: "Scroll to the top of the page when clicking on it",
        example: "scrollToTop()",
        result: "-",
    },
    {
        function: "convertYoutube(url)",
        effect: "Convert a Youtube URL to an embed link",
        example:
            'convertYoutube("https://www.youtube.com/watch?v=2EaxYi31ips")',
        result: convertYoutube("https://www.youtube.com/watch?v=2EaxYi31ips"),
    },
]

function UtilsDemo() {
    return (
        <Container>
            <Head>
                <tr>
                    <td>Function</td>
                    <td>Effect</td>
                    <td>Example</td>
                    <td>Result</td>
                </tr>
            </Head>

            <Body>
                {utils.map((util, i) => (
                    <tr key={i}>
                        <td>{util.function}</td>
                        <td>{util.effect}</td>
                        <td>{util.example}</td>
                        <td>{util.result}</td>
                    </tr>
                ))}
            </Body>
        </Container>
    )
}

export default UtilsDemo
