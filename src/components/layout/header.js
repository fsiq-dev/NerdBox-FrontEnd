import { useState, useEffect } from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import '../../assets/css/style.css'

//_____Images_____
import NerdBoxLogo from '../../assets/images/logos/logo-header.png';
import Teste from '../../assets/estilo-teste.js';


const Header = ()=>{ 

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return(   
        <SHeader>
            <Teste>
                <Navbar expand="md"> {/* < nav >*/}
                    <NavbarBrand tag={RRDNavLink} to="/">
                        <img src={NerdBoxLogo} alt="Nerd Box Logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar> {/* < ul >*/}
                            <NavItem> {/* < li >*/}
                                <NavLink exact tag={RRDNavLink} to="/" activeClassName="active">Home</NavLink> {/* < a href >*/}
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRDNavLink} to="/sobre" activeClassName="active">Sobre</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Teste>
        </SHeader>
    );
};

export default Header;

const SHeader = styled.header`
    background-color:#2b2450;
    width:100vw;
//     display:flex;
//     justify-content:center;
`

// const SNavbar = styled(Navbar)`
//     /* background-color:#2b2450; */
//     /* width:1200px; */
// `
// const SNavbarBrand = styled(NavbarBrand)`
//     img{
//         width: 80px; 
//     }
// `
// const SNavLink = styled(NavLink)`
//     color:#4bbcba !important; 
//     font-weight:bolder;
//     text-transform:uppercase;
//     font-size:18px;
//     padding:5px 20px !important;
//     margin:0 5px;
//     border-radius:20px;

//     :hover{
//         background-color:#42396e;
//     }
//     /* &.active{
//         color:blue !important;
//     } */
// `