import { Navbar, Container, Nav } from "react-bootstrap"


const NavigationBar = () => {
    const nama = "AGA"
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>{nama}</Navbar.Brand>
                <Nav>
                    <Nav.Link>MENU</Nav.Link>
                    <Nav.Link>BELUM ADA</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar