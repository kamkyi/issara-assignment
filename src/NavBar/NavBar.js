import { Navbar,Nav,NavDropdown } from "react-bootstrap"

const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand>Issara Assignment</Navbar.Brand>
        <Navbar.Toggle aria-controls="change-language" />
        <Navbar.Collapse id="change-language">
            <Nav className="mr-auto">
                <NavDropdown title="Choose Language" id="change-language-nav-dropdown">
                {
                    props.languages.map(language => {
                        return <NavDropdown.Item key={language.code} onClick={props.chosen.bind(this,language.code)}>{language.name}</NavDropdown.Item>
                    })           
                }
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;