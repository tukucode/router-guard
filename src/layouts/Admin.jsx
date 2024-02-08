import { Outlet, Link, Navigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { handleLogout } from "../store/reducers/auth";

export default function LayoutAdmin() {
  const { isLogin } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(handleLogout(true));
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/admin">Admin</Navbar.Brand>

          <Nav className="me-auto">
            <Link to="/admin" className="text-white text-decoration-none">
              Wellcome
            </Link>

            <Link
              to="/contact"
              className="mx-3 text-white text-decoration-none"
            >
              Contact
            </Link>

            <Button onClick={onLogout}>Logout</Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-3">
        <Outlet key="layout-admin" />
      </Container>
    </>
  );
}
