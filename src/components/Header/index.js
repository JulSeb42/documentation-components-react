// Imports
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid"

import siteData from "../../data/siteData"

import { Container, NavItem, MenuButton, Nav } from "./styles"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    // Links
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
            <NavItem as={Link} to="/" logo={1}>
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
                {links.map(link => (
                    <NavItem as={NavLink} to={link.to} key={uuid()}>
                        {link.text}
                    </NavItem>
                ))}
            </Nav>
        </Container>
    )
}

export default Header
