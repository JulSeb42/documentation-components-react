// Imports
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { Burger, Variables } from "tsx-library-julseb"

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

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }

    ${props =>
        !props.logo &&
        css`
            position: relative;

            &:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 1px;
                transition: ${Variables.Transitions.Short};
                background-color: ${Variables.Colors.White};
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

    & > *:not(:last-of-type) {
        margin-right: ${Variables.Spacers.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        left: 0;
        width: 100%;
        top: ${props => (props.open ? "56px" : "-200px")};
        padding: ${Variables.Spacers.XS} 5vw;
        z-index: 999;
        background-color: ${Variables.Colors.White};
        transition: ${Variables.Transitions.Short};

        & > *:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${Variables.Spacers.XS};
        }
    }
`

export { Container, NavItem, MenuButton, Nav }
