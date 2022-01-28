// Packages
import React from "react"
import { Font, LinkScroll as Link } from "components-react-julseb"

// Components
import Page from "../components/Page"

// Links
const links = [
    {
        text: "Styles",
        url: "/styles",
    },

    {
        text: "Layouts",
        url: "/layouts",
    },

    {
        text: "Components",
        url: "/components",
    },

    {
        text: "Helpers",
        url: "/helpers",
    },
]

function NotFound(props) {
    return <Page title="404">
        <Font.H1>Not found!</Font.H1>

        <Font.P>You can go <Link to="/">back to homepage</Link>, or:</Font.P>

        <Font.List>
            {links.map((link, i) => (
                <li key={i}>
                    <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
        </Font.List>
    </Page>
}

export default NotFound