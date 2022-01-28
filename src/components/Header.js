// Packages
import React, { useState } from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Variables, Burger, LinkScroll } from "components-react-julseb"

// Data
import SiteData from "./data/SiteData"

// Styles
const Container = styled.header`
    width: 100%;
    padding: ${Variables.Margins.M} 5vw;
    background-color: ${Variables.Colors.Primary500};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    a {
        color: ${Variables.Colors.White};
        text-decoration: none;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        left: 0;
        top: -200px;
        width: 100%;
        background-color: ${Variables.Colors.Primary500};
        display: grid;
        grid-template-columns: 1fr;
        gap: ${Variables.Margins.S};
        padding: ${Variables.Margins.XS} 5vw;
        transition: ${Variables.Transitions.Long};
        z-index: 100;
    }

    &.open {
        top: 56px;
    }
`

const Hamburger = styled(Burger)`
    display: none;

    @media ${Variables.Breakpoints.Mobile} {
        display: block;
    }
`

const Logo = styled(LinkScroll)``

const Link = styled(LinkScroll)`
    position: relative;

    &:after {
        content: "";
        position: absolute;
        background-color: ${Variables.Colors.White};
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        transition: ${Variables.Transitions.Short};
    }

    &:hover:after {
        width: 100%;
    }

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }
`

// Links
const links = [
    {
        text: "Home",
        url: "/",
    },

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

function Header(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "open" : ""

    return (
        <Container>
            <Logo to="/">{SiteData.Name}</Logo>

            <Hamburger
                width={24}
                height={16}
                color="white"
                className={open}
                onClick={() => setIsOpen(!isOpen)}
            />

            <Nav className={open}>
                {links.map((link, i) => (
                    <Link as={NavLink} to={link.url}>
                        {link.text}
                    </Link>
                ))}
            </Nav>
        </Container>
    )
}

export default Header
