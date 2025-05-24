// import { Navbar, Container, Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">MOVIES</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#horror">HORROR</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
