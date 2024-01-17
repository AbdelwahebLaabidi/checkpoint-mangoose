import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavListe=()=>{
    return(
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'} >Home</Nav.Link>
                    <Nav.Link as={Link} to={'/ListeContact'}>ListeContact</Nav.Link>
                    <Nav.Link as={Link} to={'/AddListe'} >AddListe</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavListe