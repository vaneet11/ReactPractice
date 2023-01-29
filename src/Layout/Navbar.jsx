import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function TopNavbar() {
    const name = " mark otto";
    const navigate = useNavigate()
    const logout = () => {
        console.log("logout")
        localStorage.removeItem('token')
        navigate('/')
    }
    return (<>
        <Navbar className='navbartop' expand="lg">
            <Container>
                <Navbar.Brand href="/dashboard"><h3>LetsDoo</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="gap-4 mx-auto" >
                        <Nav.Link href="/dashboard">Home</Nav.Link>
                        <Nav.Link href="/todo">TodoList</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                    <Navbar.Text>

                        Signed in as:
                    </Navbar.Text>
                    <NavDropdown title={name} className='ms-2' id="basic-nav-dropdown">
                        <NavDropdown.Item href="/myprofile">My Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}
