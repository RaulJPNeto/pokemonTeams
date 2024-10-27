import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    NavbarWrapper,
    Logo,
    MenuIcon,
    HamburgerMenuWrapper,
    HamburgerDropdownMenu,
    HamburgerMenuItem,
    UserMenuWrapper,
    UserIcon,
    DropdownMenu,
    MenuItem
} from './Navbar.styles';

const Navbar = ({ setIsAuthenticated }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/login');
    }
/*

    const goToProfile = () => {
        navigate('/profile');
    }
*/

    return (
        <NavbarWrapper>
            <HamburgerMenuWrapper>
                <MenuIcon onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}>
                    &#9776;
                </MenuIcon>
                <HamburgerDropdownMenu show={hamburgerMenuOpen}>
                    <HamburgerMenuItem onClick={() => alert('Link 1')}>Link 1</HamburgerMenuItem>
                    <HamburgerMenuItem onClick={() => alert('Link 2')}>Link 2</HamburgerMenuItem>
                    <HamburgerMenuItem onClick={() => alert('Link 3')}>Link 3</HamburgerMenuItem>
                </HamburgerDropdownMenu>
            </HamburgerMenuWrapper>

            {/* Logo do site */}
            <Logo>Pokemon Teams</Logo>

            {/* User Menu */}
            <UserMenuWrapper>
                <UserIcon onClick={() => setMenuOpen(!menuOpen)}>
                    U
                </UserIcon>
                <DropdownMenu show={menuOpen}>
                    <MenuItem onClick={() => alert('Perfil em construção')}>Perfil</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </DropdownMenu>
            </UserMenuWrapper>
        </NavbarWrapper>
    );
};

export default Navbar;