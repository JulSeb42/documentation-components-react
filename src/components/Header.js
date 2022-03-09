// Packages
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styled, { css } from "styled-components"
import { Burger, Variables } from "components-react-julseb"

// Data
import siteData from "../data/siteData"

// Styles
const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Spacers.M} 5vw;
    position: relative;
    background-color: ${Variables.Colors.Primary500};
`

const NavItem = styled(NavLink)`
    text-decoration: none;
    color: ${Variables.Colors.White};
    transition: ${Variables.Transitions.Short};
    padding: 0;
    border: none;
    background: none;
    font-size: ${Variables.FontSizes.Body};
    position: relative;

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }

    ${props =>
        !props.logo &&
        css`
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
        `}

    ${props =>
        props.logo &&
        css`
            font-weight: ${Variables.FontWeights.Black};
        `}
`

const MenuButton = styled(Burger)`
    display: none;
    color: ${Variables.Colors.White};

    @media ${Variables.Breakpoints.Mobile} {
        display: inline;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Spacers.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        left: 0;
        width: 100%;
        top: -200px;
        padding: ${Variables.Spacers.XS} 5vw;
        z-index: 999;
        background-color: ${Variables.Colors.Primary500};
        transition: ${Variables.Transitions.Short};

        & > *:not(:last-child) {
            margin-right: 0;
            margin-bottom: ${Variables.Spacers.XS};
        }

        ${props =>
            props.open &&
            css`
                top: 56px;
            `}
    }
`

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        {
            text: "Home",
            to: "/",
        },
        {
            text: "Styles",
            to: "/styles",
        },
        {
            text: "Layouts",
            to: "/layouts",
        },
        {
            text: "Components",
            to: "/components",
        },
        {
            text: "Helpers",
            to: "/helpers",
        },
    ]

    return (
        <Container>
            <NavItem as={Link} to="/" logo>
                {siteData.name}
            </NavItem>

            <MenuButton
                width={28}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
                color="currentColor"
                open={isOpen}
            />

            <Nav open={isOpen}>
                {links.map((link, i) => (
                    <NavItem to={link.to} key={i}>
                        {link.text}
                    </NavItem>
                ))}
            </Nav>
        </Container>
    )
}

export default Header
