/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  NavLink
} from "reactstrap";
import { AuthContext, useAuth } from "../../context/AuthContext";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const {logout} = useAuth();
  const {currentUser} = useContext(AuthContext);

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Arrayán</span>
          </NavbarBrand>
          {/* <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip> */}
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Arrayán
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
          <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/track"
              >
                <i className="tim-icons icon-zoom-split" />
                <p className="font-weight-bold">Search</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/inventory"
              >
                <i className="tim-icons icon-single-02" />
                <p className="font-weight-bold">My Inventory</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/smartcontract"
              >
                <i className="tim-icons icon-notes" />
                <p className="font-weight-bold">My Contract</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/contactus"
              >
                <i className="tim-icons icon-email-85" />
                <p className="font-weight-bold">Contact Us</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
                  <NavLink
                    data-placement="bottom"
                    tag={Link} to="/team"
                  >
                    <i className="tim-icons icon-user-run" />
                    <p className="font-weight-bold">Team</p>
                  </NavLink>
                </NavItem>
            {
              currentUser==null?
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons" style={{backgroundColor: "#171941"}}>
                <DropdownItem tag={Link} to="/login">
                  <i className="tim-icons icon-badge" />
                  Login
                </DropdownItem>
                <DropdownItem tag={Link} to="/register">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>: 
            <NavItem>
            <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={async ()=>await logout()}
                data-placement="bottom"
              >
                <i className="tim-icons icon-button-power" /> Logout
              </Button>
              </NavItem>}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
